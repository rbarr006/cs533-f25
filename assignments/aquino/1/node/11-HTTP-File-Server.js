/*An example of an HTTP server that serves the same text file for each request it receives. It listens on the port provided by the first
argument, the location of the file to serve is the second argment*/

const http = require('http');
const fs = require('fs');
let portNumber = process.argv[2];
let filename = process.argv[3];
http.createServer(function(request, response){
    fs.createReadStream(filename).pipe(response)
}).listen(+portNumber, function(){
    console.log('Server listening on http://localhost:%s', portNumber)
});