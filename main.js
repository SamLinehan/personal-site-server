var Express = require("express");
var app = Express();
var server = require("http").Server(app);
var bodyParser = require("body-parser");
var cors = require("cors");
var nodemailer = require("nodemailer");
require("dotenv").config();

app.use(cors({origin: true, allowedHeaders: ["X-Requested-With", "Content-Type" ], methods: ["PUT", "GET", "POST", "DELETE", "OPTIONS"]}));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

server.listen(process.env.PORT || 3000, function() {
  console.log("listening...");
});

var address = process.env.ADDRESS;
var word = process.env.WORD;

app.post("/", handleEmail);

function handleEmail(request, response) {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: address,
      pass: word
    }
  });

  var email = {
    from: request.body.sender,
    to: address,
    subject: "New message from " + request.body.name + " " + "Email: " + request.body.sender,
    text: request.body.message
  };

  transporter.sendMail(email, function(err, info) {
    if(err) {
      console.log(err);
    } else {
      console.log("Message Sent!");
      response.send({
        status: "Message Sent!"
      })
    }
  });
}
