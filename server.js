'use strict';

const express         = require('express');
const https           = require('https');
const http           = require('http');
const fs              = require('fs');
const bodyParser      = require('body-parser');

const SERVER_PORT     = 443;
//const SERVER_IP       = <YOUR_IP>;

// SSL Certificate stuff for https
/*var privateKey  = fs.readFileSync(<PATH TO YOUR privateKey file>, 'utf8');
var certificate = fs.readFileSync(<PATH TO YOUR certificate file>, 'utf8');
var ca = fs.readFileSync(<PATH TO YOUR crt file>).toString();
var options = {key: privateKey, cert: certificate,ca:ca};*/

const app = express();

app.use(bodyParser.json({ type: 'application/json' }));
var alexa_response= {
                      "version": "1.0",
                      "sessionAttributes": {
                      },
                      "response": {
                        "outputSpeech": {
                          "type": "PlainText",
                          "text": "Thank you fo asking"
                        },
                        "shouldEndSession": true
                      }
                    };


// your service will be available on <YOUR_IP>/alexa
app.post('/alexa/', function (req, res) {
    console.log("Got a post request on /alexa");
    console.log("req.body");
    console.log(req.body);
  /*  var ctx = context();
    lambda.handler(req.body,ctx);
    ctx.Promise
        .then(resp => {  return res.status(200).json(resp); })
        .catch(err => {  console.log(err);//add your error handling stuff })*/
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(alexa_response));
    //return res.status(200).setHeader('Content-Type', 'application/json').send(JSON.stringify(alexa_response));
});

app.post('/', function (req, res) {
    console.log("Got a post request on /");
    console.log("req.body");
        console.log(req.body);
  /*  var ctx = context();
    lambda.handler(req.body,ctx);
    ctx.Promise
        .then(resp => {  return res.status(200).json(resp); })
        .catch(err => {  console.log(err);//add your error handling stuff })*/
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(alexa_response));
    //return res.status(200).setHeader('Content-Type', 'application/json').send(JSON.stringify(alexa_response));
});


app.get('/', function (req, res) {
    console.log("Got a GET request on /");
    console.log("req.body");
        console.log(req.body);
  /*  var ctx = context();
    lambda.handler(req.body,ctx);
    ctx.Promise
        .then(resp => {  return res.status(200).json(resp); })
        .catch(err => {  console.log(err);//add your error handling stuff })*/
    return res.status(200).send('Empty Data');
});

//var httpsServer = https.createServer(options, app);
var httpServer = http.createServer(app);
//httpsServer.listen(REST_PORT, SERVER_IP,function () {
httpServer.listen(8080,function () {
    console.log('Alexa  ill service ready on 8080 via https. Be happy!');
});
