let offer_agreement = async function offer_agreement(database_connection, post_id, tutorial_date, tutorial_time, tutorial_room, tutor_signature) {
    //Declare all libraries we need
    const Digital_Signature = require('./Digital_Signature'); 
    const signature_controller = new Digital_Signature();
    const functions = require('./functions');

    //Update
    let update_post_agreement_status_response = await database_connection.update_post_agreement_status(post_id, { post_agreement_offered: true, tutorial_date: tutorial_date, tutorial_time: tutorial_time, tutorial_room: tutorial_room });

    if(update_post_agreement_status_response.error) {
        return update_post_agreement_status_response;
    }

    update_post_agreement_status_response = update_post_agreement_status_response.response;
    
    let digital_certificate = await database_connection.get_digital_certificate_details(update_post_agreement_status_response.post_tutor_email);

    //return {t: digital_certificate, l: update_post_agreement_status_response};
    let pdf_path_and_name = await functions.create_agreement_pdf({tutorial_date: tutorial_date, tutorial_time: tutorial_time, tutorial_room: tutorial_room}, {tutor_signature: tutor_signature, student_signature: null}, update_post_agreement_status_response);

    console.log(pdf_path_and_name);

    console.log(digital_certificate)

    let signed_pdf_path = await signature_controller.digitally_sign_pdf(pdf_path_and_name.pdf_path, { tutor: digital_certificate });
    let update_post_agremeent_url_response = await database_connection.update_post_agreement_url(post_id, signed_pdf_path.response, tutor_signature);

    //Send 2 emails 
    functions.send_email_with_agreement({ student: { student_name: update_post_agreement_status_response.std_name, student_email: update_post_agreement_status_response.std_email, student_email_subject: 'NOREPLY - Agreement created successfully', student_email_body: "Your tutor has just created an agreement, please review it and either accept or decline it in the app." }, tutor: { tutor_name: update_post_agremeent_url_response.post_tutor_name, tutor_email: update_post_agreement_status_response.post_tutor_email, tutor_email_subject: 'NOREPLY - New agreement offer from Service Loop', tutor_email_body: "Agreement creation has been successful, now wait for the student to accept or reject the agreement" }, agreement_url: signed_pdf_path.response, agreement_name: signed_pdf_path.response.substring(15) });

    let notification_response_tutor = await database_connection.create_notification("Agreement created successfully", "You have successfully created an agreement for the tutorial '" + update_post_agremeent_url_response.post_title + "'. Please wait for " + update_post_agremeent_url_response.std_name + " to accept or reject the agreement to proceed with the tutorial. Click the button below to see the agreement.", update_post_agreement_status_response.post_tutor_email, ["Tutorial agreement offered"], { post_id: post_id, post_modules: update_post_agreement_status_response.post_modules });
    let notification_response_student = await database_connection.create_notification("New agreement for the '" + update_post_agremeent_url_response.post_title + "' tutorial", update_post_agremeent_url_response.post_tutor_name + " has created an agreement for the '" + update_post_agremeent_url_response.post_title + "' tutorial. Please view this agreement in context by clicking the button below and either accept or reject the agreement to proceed with the process.", update_post_agreement_status_response.std_email, ["Tutorial agreement offered"], { post_id: post_id, post_modules: update_post_agreement_status_response.post_modules });
    database_connection.disconnect();

    return { error: false, response: "Agreement sent successfully", updated_tutorial: update_post_agremeent_url_response, tutor_notification: notification_response_tutor, student_notification: notification_response_student };
}

exports.offer_agreement = offer_agreement;




