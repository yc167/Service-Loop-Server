// let Digital_Signature = require('../services/Digital_Signature');
// let Digital_Signature_Instance;

// describe('Digital Signature', function(){

//     beforeAll(() => {
//         Digital_Signature_Instance = new Digital_Signature();
//     }); 

//     it('Should create a PDF and return the path', async () => {
//         let result = await Digital_Signature_Instance.create_pdf("John_Doe_and_Jane_Doe_contract",
//         "John Doe (\"Lender\") is lending 100 euro (the \"principal\") to hhdhdhd(\"Borrower\").The yearly interest rate of this loan is 0%. This is simple interest, with partialyears prorated on the basis of a 365-day year. If this rate exceeds the legal limit,then the interest rate shall equal the legal limit, and all related figures in thisagreement shall be adjusted accordingly.The loan begins on 2018-12-12.The following term applies:Lump-sum payment: Borrower must pay Lender the principal plus anyaccumulated interest in a lump sum on or before 2018-12-12.If Borrower fails to make any payment on time, the loan will be in default. Upondefault, the total outstanding balance will accrue interest at the annualized rateplus 10 percentage points over the annualized rate, or the legal limit if lower, untilit is paid.If any overdue amount is not paid within 30 days, Lender will have the option todemand from Borrower, for immediate payment, the total outstanding loanbalance (principal plus any accrued interest).This agreement is between Borrower and Lender, and neither is allowed todelegate, transfer or assign it to a third party without the written consent of theother.This is the parties' entire agreement on this matter, superseding all previousnegotiations or agreements. It can only be changed by mutual written consent.Failure to enforce any provision within this agreement does not waive thatprovision.The laws of the state of Louth govern this agreement and any disputes arising fromit will be handled exclusively in courts in that state. The prevailing party in anydispute will be entitled to recover reasonable costs and attorneys' fees.If a court invalidates any part of this agreement, the rest remains in effect.Signing a copy of this agreement, physical or electronic, will have the same effectas signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.",
//         "s", "d");
        
//         expect(result).toBe('resources/pdfs/John_Doe_and_Jane_Doe_contract');
//     });

//     it('Should throw an error', async () => {
//         let result;
        
//         try {
//         result = await Digital_Signature_Instance.create_pdf(
//                 "John Doe (\"Lender\") is lending 100 euro (the \"principal\") to hhdhdhd(\"Borrower\").The yearly interest rate of this loan is 0%. This is simple interest, with partialyears prorated on the basis of a 365-day year. If this rate exceeds the legal limit,then the interest rate shall equal the legal limit, and all related figures in thisagreement shall be adjusted accordingly.The loan begins on 2018-12-12.The following term applies:Lump-sum payment: Borrower must pay Lender the principal plus anyaccumulated interest in a lump sum on or before 2018-12-12.If Borrower fails to make any payment on time, the loan will be in default. Upondefault, the total outstanding balance will accrue interest at the annualized rateplus 10 percentage points over the annualized rate, or the legal limit if lower, untilit is paid.If any overdue amount is not paid within 30 days, Lender will have the option todemand from Borrower, for immediate payment, the total outstanding loanbalance (principal plus any accrued interest).This agreement is between Borrower and Lender, and neither is allowed todelegate, transfer or assign it to a third party without the written consent of theother.This is the parties' entire agreement on this matter, superseding all previousnegotiations or agreements. It can only be changed by mutual written consent.Failure to enforce any provision within this agreement does not waive thatprovision.The laws of the state of Louth govern this agreement and any disputes arising fromit will be handled exclusively in courts in that state. The prevailing party in anydispute will be entitled to recover reasonable costs and attorneys' fees.If a court invalidates any part of this agreement, the rest remains in effect.Signing a copy of this agreement, physical or electronic, will have the same effectas signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.",
//                 "s", "d");
//         } catch(err) {
//             result = err;
//         }
        
        
//         expect(result).toBe('File creation failed!');
//     }); 

//     it('Should digitally sign the created PDF', async () => {
//         let result;
        
//         try {
//         result = await Digital_Signature_Instance.create_digitally_signed_pdf("John_Doe_and_Jane_Doe_contract",
//                 "John Doe (\"Lender\") is lending 100 euro (the \"principal\") to hhdhdhd(\"Borrower\").The yearly interest rate of this loan is 0%. This is simple interest, with partialyears prorated on the basis of a 365-day year. If this rate exceeds the legal limit,then the interest rate shall equal the legal limit, and all related figures in thisagreement shall be adjusted accordingly.The loan begins on 2018-12-12.The following term applies:Lump-sum payment: Borrower must pay Lender the principal plus anyaccumulated interest in a lump sum on or before 2018-12-12.If Borrower fails to make any payment on time, the loan will be in default. Upondefault, the total outstanding balance will accrue interest at the annualized rateplus 10 percentage points over the annualized rate, or the legal limit if lower, untilit is paid.If any overdue amount is not paid within 30 days, Lender will have the option todemand from Borrower, for immediate payment, the total outstanding loanbalance (principal plus any accrued interest).This agreement is between Borrower and Lender, and neither is allowed todelegate, transfer or assign it to a third party without the written consent of theother.This is the parties' entire agreement on this matter, superseding all previousnegotiations or agreements. It can only be changed by mutual written consent.Failure to enforce any provision within this agreement does not waive thatprovision.The laws of the state of Louth govern this agreement and any disputes arising fromit will be handled exclusively in courts in that state. The prevailing party in anydispute will be entitled to recover reasonable costs and attorneys' fees.If a court invalidates any part of this agreement, the rest remains in effect.Signing a copy of this agreement, physical or electronic, will have the same effectas signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.signing an original.",
//                 "s", "d");
//         } catch(err) {
//             result = err;
//         }
        
        
//         expect(result).toBe('resources/pdfs/John_Doe_and_Jane_Doe_contract_signed.pdf');
//     });
// });