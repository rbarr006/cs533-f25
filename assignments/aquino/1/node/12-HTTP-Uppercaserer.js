/*An example of an HTTP server which receives only POST requests and converts incoming POST body characters to upper-case before returning it.
The server listens on the port provided by the first argument.*/
const http = require('http');
const map = require('through2-map');
let server = http.createServer(function(request, response){
    if(request.method != 'POST'){
        return response.end('A POST is required');
    }
    request.pipe(map(function(chunk){
        return chunk.toString().toUpperCase()
    })).pipe(response);
});
server.listen(Number(process.argv[2]));
