function create_agreement_pdf(post_id, tutor_email, tutor_name, tutorial_date, tutorial_time, tutorial_room, tutor_signature, student_signature, student_name, student_email) {
    // console.log(post_id);
    // console.log(tutor_email);
    // console.log(tutor_name);
    // console.log(tutorial_date);
    // console.log(tutorial_time);
    // console.log(tutorial_room); 
    // console.log(student_name);
    // console.log(student_email);
    
    return new Promise((resolve, reject) => {
        const fs = require('fs');
        const PDFDocument = require('pdfkit');
        // Create a document
        const doc = new PDFDocument();
        // const std_table = new PdfTable(doc);

        let today = new Date(); 
        let signed_on = today.getDate() + "/" + parseInt(today.getMonth() + 1) + "/" + today.getFullYear();

        doc.fontSize(26);
        doc.font('Times-Roman');
        //add title 
        doc.image("./resources/images/agreement_logo.png", 10, 15,
            {
                scale: 0.4
            }) + doc.text(" Tutorial Agreement Contract", {
                width: 450,
                align: 'center'

            }
            );

        doc.fontSize(11);
        //add destription
        doc.moveDown();
        doc.text("This contract is to completed and signed by Tutor and Student, to indicate that an agreement has been made to facilitate student-tutoring service in accordance with Dundalk Institute of Technology guidelines.", {
            width: 450,
            align: 'left'
        }
        );

        doc.moveDown();
        doc.fontSize(11);
        // std_table
        // .setColumnsDefaults({
        //     headerBorder: 'B',
        //     align: 'centre'   
        // })
        // // add table columns
        // .addColumns([
        //     {
        //         id: 'tutorial_title',
        //         header: 'Tutorial title',
        //         width: 100,
        //         height: 20

        //     },
        //     {
        //         id: 'tutorial_desc',
        //         header: 'Tutorial Description',
        //         width: 250,
        //         height: 20
        //     },
        //     {
        //         id: 'tutorial_module',
        //         header: 'Tutorial module',
        //         width: 90,
        //         height: 20

        //     }
        // ]);

        // std_table.addBody([
        //     {tutorial_title: "Java Script",tutorial_desc: " Help need with For Loops and if statements",tutorial_module:"Object Orientated Programming"}
        // ]);
        doc.fontSize(16);
        doc.font('Times-Bold');
        doc.text(" Tutorial Details", {
            width: 450,
            align: 'left'
        });
        doc.font('Times-Roman');
        doc.fontSize(11);
        doc.moveDown();

        doc.text(" Tuturoial Title: " + "\n Java Script" + "\n\n Tutorial Description: " + "\n Help needed with For Loops and if statements" + "\n\n Tutorial Module: " + "\n Object Orientated Programming", {
            width: 450,
            align: 'left'
        });
        doc.moveDown();
        doc.text(" Tuturoial will take place in " + tutorial_room + " Carrols Building on the " + tutorial_date + " at " + tutorial_time + " (24hr)", {
            width: 450,
            align: 'left'
        });
        //Write Table
        //doc.pipe(writeStream);
        //line to the middle
        doc.moveDown();

        doc.fontSize(16);
        doc.font('Times-Bold');
        doc.text(" Student Details", {
            width: 450,
            align: 'left'
        });
        doc.font('Times-Roman');
        doc.fontSize(11);

        doc.moveDown();
        doc.text(" Student Name: " + student_name, {
            width: 450,
            align: 'left'
        });
        doc.text(" Student Email: " + student_email, {
            width: 450,
            align: 'left'
        });
        doc.moveDown();
        doc.text(" Signed: " + "\n ") + doc.image(student_signature, {
            scale: 0.30,
            align: 'left'
        }
        );
        doc.rect(doc.x, 160, 500, doc.y).stroke();
        doc.moveDown();

        doc.fontSize(16);
        doc.font('Times-Bold');
        doc.text(" Tutor Details", {
            width: 450,
            align: 'left'
        });
        doc.moveDown();

        doc.font('Times-Roman');
        doc.fontSize(11);
        doc.text(" Tutor Name: " + tutor_name, {
            width: 450,
            align: 'left'
        });
        doc.text(" Tutor Email: " + tutor_email, {
            width: 450,
            align: 'left'
        });
        doc.moveDown();
        //add the image
        doc.text(" Signed: " + "\n ") + doc.image(tutor_signature, {
            scale: 0.30,
            align: 'left'
        }
        );
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.fontSize(10);
        doc.text("Date Signed: " + signed_on, {
            width: 500,
            align: 'left'

        }
        );
        doc.moveDown();
        doc.fontSize(10);
        doc.text("Please be aware by signing this document you are confirming the details of this agrangement is correct and constenting to Service Loops terms & conditions.", {
            width: 500,
            align: 'centre'

        }
        );
        doc.end();

        let writeStream = doc.pipe(fs.createWriteStream('./resources/pdfs/agreement_' + post_id + '.pdf'));

        writeStream.on('error', function (err) {
            if (err.code === 'ENOENT') {
                resolve("File creation failed!");
            } else {
                resolve("An unexpected error has occured when creating files!");
                console.log(err);
            }
        });

        writeStream.on('finish', function () {

            resolve({pdf_name: "agreement_" + post_id + ".pdf", pdf_path: "./resources/pdfs/agreement_" + post_id + ".pdf"});
        });
    });
}

let accept_agreement = async function accept_agreement(database_connection, post_id, student_signature) {
    const Digital_Signature = require('./Digital_Signature');
    const Email_Object = require('./send_email');
    const fs = require('fs');
    
    const signature_controller = new Digital_Signature(); 

    //Get student details this way
    let update_post_agreement_status_response = await database_connection.update_post_agreement_status(post_id, { post_agreement_signed: true, post_status: "Ongoing"}); 

    let student_name = update_post_agreement_status_response.std_name;
    let student_email = update_post_agreement_status_response.std_email;
    
    let tutor_name = update_post_agreement_status_response.post_tutor_name;
    let tutor_email = update_post_agreement_status_response.post_tutor_email;
    let tutor_signature = update_post_agreement_status_response.tutor_signature;

    let tutorial_date = update_post_agreement_status_response.tutorial_date; 
    let tutorial_time = update_post_agreement_status_response.tutorial_time; 
    let tutorial_room = update_post_agreement_status_response.tutorial_room; 
    

    let tutor_digital_certificate = await database_connection.get_digital_certificate_details(tutor_email);
    let student_digital_certificate = await database_connection.get_digital_certificate_details(student_email);

    let pdf_path_and_name = await create_agreement_pdf(post_id, tutor_email, tutor_name, tutorial_date, tutorial_time, tutorial_room, tutor_signature, student_signature, student_name, student_email)
    
    let signed_pdf_path = await signature_controller.digitally_sign_pdf(pdf_path_and_name.pdf_path, {student: student_digital_certificate, tutor: tutor_digital_certificate}, true);
    
    let update_post_agremeent_url_response = await database_connection.update_post_agreement_url(post_id, signed_pdf_path.response, tutor_signature);
    
    console.log("New PDF path")
    console.log(signed_pdf_path);

    //Send 2 emails
    Email_Object.send_email({ student: { student_name: student_name, student_email: student_email, student_email_subject: 'NOREPLY - Agreement accepted successfully', student_email_body: "You have successfully accepted the agreement for the '" + update_post_agreement_status_response.post_title + "' tutorial. Your tutorial is scheduled for " + tutorial_date + " at " +  tutorial_time + " in room " + tutorial_room + "."}, tutor: { tutor_name: tutor_name, tutor_email: tutor_email, tutor_email_subject: 'NOREPLY - Agreement accepted successfully', tutor_email_body: "The student " + student_name + " has accepted your offered agreement for the '" + update_post_agreement_status_response.post_title + "' tutorial. The tutorial is scheduled for " + tutorial_date + " at " +  tutorial_time + " in room " + tutorial_room + "." }, agreement_url: signed_pdf_path.response, agreement_name: signed_pdf_path.response.substring(17) });

    //Create 2 notifications
    //SEND VIA WEBSOCKET!!!!!!
    let notification_response_tutor = await database_connection.create_notification("Agreement accepted", "The student '" + update_post_agremeent_url_response.std_name + "' has accepted your agreement for the '" + update_post_agremeent_url_response.post_title + "' tutorial. You can view the agreement by clicking the button below. Your tutorial is scheduled for " + tutorial_date + " at " +  tutorial_time + " in room " + tutorial_room + ".", tutor_email, ["Tutorial agreement accepted"], { post_id: post_id });
    let notification_response_student = await database_connection.create_notification("Agreement accepted", "You have accepted the agreement offered by your tutor '" + update_post_agremeent_url_response.post_tutor_name + "'. Please note that the tutorial is scheduled for " + tutorial_date + " at " +  tutorial_time + " in room " + tutorial_room + ". You can view the agreement by clicking the button below.", student_email, ["Tutorial agreement accepted"], { post_id: post_id });
    database_connection.disconnect();

    return {error: false, response: "Agreement sent successfully", updated_tutorial: update_post_agremeent_url_response, tutor_notification: notification_response_tutor, student_notification: notification_response_student};
}

exports.accept_agreement = accept_agreement;





