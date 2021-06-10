
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: process.env.FROM_EMAIL,
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })

}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: process.env.FROM_EMAIL,
        subject: 'Sorry to watch you go!',
        text: `Hi, ${name}. Sorry to watch you are leaving the service.`
    })

}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}