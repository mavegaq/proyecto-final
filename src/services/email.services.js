const nodemailer = require('nodemailer');

const sendEmail = async (emailDetails) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: emailDetails.to,
        subject: emailDetails.subject,
        text: emailDetails.text
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    sendEmail
};
