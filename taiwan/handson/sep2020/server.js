var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("IBM Cloud Nodejs on K8S Free Cluster - Hello World!");
}
var www = http.createServer(handleRequest);
www.listen(8080);