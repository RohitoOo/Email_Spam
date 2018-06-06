const express = require('express');
const sgMail = require('@sendgrid/mail');
// import SENDGRID_API_KEY from "./sendgrid.env"


//Init App
const app = express();






app.post('/' , function(req,res){


  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
   to: 'rohit.m.bhambhani@gmail.com',
   from: 'bhambhani.ba@gmail.com',
   subject: 'Important!',
   text: '.',
   html: '<strong>I like to Puss It Puss It</strong>',
  }
    sgMail.send(msg).then(()=>{
      console.log("Success")
    }).catch(error=>{
    console.log("Error")
  })

   res.end();



})




// using SendGrid's v3 Node.js Library
// // https://github.com/sendgrid/sendgrid-nodejs



app.listen(3000, function() {

  console.log('Server Started on port 3000')
})
