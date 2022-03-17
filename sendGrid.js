const sgMail = require('@sendgrid/mail');
const API_KEY = process.env.SEND_GRID_API_KEY;
sgMail.setApiKey(API_KEY)

// name,email,time,msg
function sendEmail(email, template, text) {


    try {
        const message = {

            to: email,
            from: {
                name: 'ShopApp',
                email: process.env.MY_ID
            },
            subject: 'Order Placed',
            text: text,
            html: template

        }


        sgMail.send(message)
            .then(res => console.log('Email Sent'))
            .catch((err) => console.log(err));

    } 
    
    catch (e) {
        console.log(e);
    }


}

module.exports = sendEmail;