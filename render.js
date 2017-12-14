//declaring modules
var content        = require('./content');
var fs             = require('fs');
var formidable     = require("formidable");
var util           = require('util');
//var express        =        require("express");
//var bodyParser     =        require("body-parser");
//var app            =        express();


function renderLaunchPage(request, response, path) {
  if(content.contentMap[path]){
  //response.writeHead(200, {'Content-Type': 'text/html'}) //write HTTP-Header
  //response.write(content.contentMap[path]); //write response to client

  if (request.method.toLowerCase() == 'get') {
        displayForm(response);
    } else if (request.method.toLowerCase() == 'post') {
        processAllFieldsOfTheForm(request, response);
    }

 }else {
  response.writeHead(404, {'Content-Type': 'text/html'})
  response.write('404 Page not found');
  response.end(); //end response
}
}

function displayForm(response){
  fs.readFile('form.html', function (err, data) {
         response.writeHead(200, {
             'Content-Type': 'text/html',
                 'Content-Length': data.length
         });
  response.write(data);
  response.end();
  });
}

function processAllFieldsOfTheForm(request, response) {
    var form = new formidable.IncomingForm();

    form.parse(request, function (err, fields, files) {
        //Store the data from the fields in your data store.
        //The data store could be a file or database or any other store based
        //on your application.
        response.writeHead(200, {
            'content-type': 'text/plain'
        });
        response.write('received the data:\n\n');
        response.end(util.inspect({
            fields: fields,
            files: files
        }));
    });
}

exports.renderLaunchPage = renderLaunchPage;
