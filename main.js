var Express = require("express");
var app = Express();
var server = require("http").Server(app);
var cors = require("cors");
var nodemailer = require("nodemailer");
require("dotenv").config();

app.use(cors());

server.listen(process.env.PORT || 3000, function() {
  console.log("listening...");
});

// CREATE AND USE NEW EMAIL ADDRESS!!!!!!

var transporter = nodemailer.createTransport()

var email = {

};

client.sendMail(email, function(err, info) {
  if(err) {
    console.log(err);
  } else {
    console.log("Message Sent!");
  }
});
