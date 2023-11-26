import nodemailer from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/json-transport';

const sendEmail = (options: MailOptions) => new Promise((resolve, reject) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NODEMAILER_MAIL,
            pass: process.env.NODEMAILER_PASSWORD,
        }
    })
    const mailOptions: MailOptions = {
        from: process.env.EMAIL,
        ...options
    }
    transporter.sendMail(mailOptions, (error, info) => {
        console.log(error, info)
        if (error) {
            console.log(error);
            return reject({ message: "An error has occured" })
        }
        return resolve({ message: "Email sent successfully" })
    })
})

export default sendEmail;
