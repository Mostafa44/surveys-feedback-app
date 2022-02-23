const keys= require('../config/keys');
const stripe= require('stripe')(keys.stripeSecretKey);

module.exports= app=>{
    app.post('/api/stripe',async (req, res)=>{
       // console.log(req.body);
       const charge = await stripe.charges.create({
        amount: 500,
        currency: 'usd',
        source: req.body.id,
        description: '5 dollars for 5 credits',
      });

      req.user.credits +=5;
      const user= await req.user.save();


      res.send(user);

    });
}