const nodemailer = require("nodemailer");
const config = require("../config");
const transporter = nodemailer.createTransport({
    host: config.SENDER_HOST,
    port: config.SENDER_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
        user: config.SENDER_ADDRESS,
        pass: config.SENDER_PASSWORD
    }
});

module.exports = {

    sendEmail: function (params) {
        let { receivers, subject, body } = params;
        const mailOptions = {
            from:
            {
                name: config.SENDER_NAME,
                address: config.SENDER_ADDRESS,
            },
            to: receivers,
            subject: subject,
            html: body
        };
        transporter.sendMail(mailOptions)
            .then(() => {
                console.log("Email sent");
            })
            .catch(error => {
                console.log(`Error when send email : ${error.message}`);
            });
    },


};