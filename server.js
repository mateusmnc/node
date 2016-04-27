//Lets require/import the HTTP module
var http = require('http');

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var server;

function handleRequest(request, response){
    response.end('Servidor rodando; Code reviewed; Refactored');
}

server = http.createServer(handleRequest);

server.listen(server_port, server_ip_address, function(){
  console.log("Listening on " + server_ip_address + ", server_port " + server_port)
});