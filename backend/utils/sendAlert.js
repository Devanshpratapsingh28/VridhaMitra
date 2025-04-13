import nodemailer from "nodemailer"

export const sendMail = async (mailData)=>{

    console.log(mailData)
    const transporter = nodemailer.createTransport({
            host:process.env.SMTP_HOST,
            port:process.env.SMTP_PORT,
            secure:false,
            service:process.env.SMTP_SERVICE,
            auth:{
                user:process.env.SMTP_MAIL,
                pass:process.env.SMTP_PASSWORD,
            }
            },
        )
        try{
            transporter.sendMail({
               from:process.env.SMTP_MAIL,
               to:mailData.guardianMail,
               subject:mailData.subject,
               text:"Name : "+mailData.name+"\n Number : "+mailData.mobilenumber+"\n Email : "+mailData.email+"\n Message : Reach this Location immediately: \n"+mailData.newsrc,
           },

           );
       }
       catch(error){
        console.log(error)
       }

       try{
        transporter.sendMail({
           from:process.env.SMTP_MAIL,
           to:mailData.email,
           subject:"From Vridha Mitra",
           text:"Your alert has been sent to your guardian successfully.",
       },
       );
    }
    catch(error){
    }
}