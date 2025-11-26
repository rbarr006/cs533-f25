/* The following is an example of how to perform an HTTP get method */
let http = require('http');
http.get(process.argv[2], function (response){
    response.setEncoding('utf8');
    response.on('data', console.log)
    response.on('error', console.error)
}).on('error', console.error);