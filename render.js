var content = require('./content');
function renderLaunchPage(response, path) {
  if(content.contentMap[path]){
  response.writeHead(200, {'Content-Type': 'text/html'}) //write HTTP-Header
  response.write(content.contentMap[path]); //write response to client
  response.end();
 }else {
  response.writeHead(404, {'Content-Type': 'text/html'})
  response.write('404 Page not found');
  response.end(); //end response
}
}

exports.renderLaunchPage = renderLaunchPage;
