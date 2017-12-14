var http =  require('http');
var url  =  require('url');
var render = require('./render');

//create server object
 var server = http.createServer(onRequest);

server.on('listening', function(){
  console.log("server is actually running");
});

server.listen(8888); //listen on port 8080

function onRequest(request, response){
  var  path = url.parse(request.url).pathname;
  console.log("pathname" + path);
  render.renderLaunchPage(request, response, path);
}
