const requireLogin= require('../middlewares/requireLogin');
const requireCredits= require('../middlewares/requireCredits');
const mongoose= require('mongoose');
const recipientSchema = require('../models/Recipient');
const Survey=  mongoose.model('surveys');
module.exports=(app)=>{

    app.post('/api/surveys', requireLogin,requireCredits,(req, res)=>{
            const {title, subject, body, recipients} = req.body;
            const survey= new Survey({
                title,
                subject,
                body,
                recipients= recipients.split(',').map(email=> ({email:email.trim()})),
                dateSent: Date.now(),
                _user: req.user.id,
            });
    })

}