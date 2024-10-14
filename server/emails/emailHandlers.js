import {createTransport} from "nodemailer";
import { createWelcomeEmailTemplate } from "./emailTemplate.js";

export const sendWelcomeEmail = (options)=>{

    const transporter = createTransport({
        host:process.env.EMAIL_SERVICE,
        port:process.env.EMMAIL_PORT,
        secure:false,
        auth:{
            user:process.env.EMAIL_USERNAME,
            pass:process.env.EMAIL_PASSWORD,
        },
    });
    const mailOptions = {
        from:process.env.EMAIL_FROM,
        to:options.to,
        subject:"Welcome to Hr-Manager",
        html: createWelcomeEmailTemplate(options.firstName, options.clientUrl),
        category: "welcome",

    };

    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error);
        }else{
            console.log("Email sent: " + info.response);
        }
    })

}




