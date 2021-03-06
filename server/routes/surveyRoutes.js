const requireLogin= require('../middlewares/requireLogin');
const requireCredits= require('../middlewares/requireCredits');
const mongoose= require('mongoose');
const recipientSchema = require('../models/Recipient');
const Mailer = require('../services/Mailer');
const surveyTemplate= require('../services/emailTemplates/surveyTemplate');
const Survey=  mongoose.model('surveys');

module.exports=(app)=>{

    app.post('/api/surveys', requireLogin,requireCredits,async (req, res)=>{
            const {title, subject, body, recipients} = req.body;
            const survey= new Survey({
                title,
                subject,
                body,
                recipients: recipients.split(',').map(email=> ({email:email.trim()})),
                dateSent: Date.now(),
                _user: req.user.id,
            });
            const mailer= new Mailer(survey, surveyTemplate(survey) );
            await mailer.send();

    })

}