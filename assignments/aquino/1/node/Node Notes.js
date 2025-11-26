/* The command 'node' followed by the location of a javascript program can be used to execute the program
    Ex: node hello-world.js */


/* The command 'node' followed by the location of a javascript program can be used to execute the program
    Ex: node hello-world.js 
    Note that the first 2 arguments will always be 'node' and then the filename. In the example below, 'arguments' is an array containing
    all of the command line arguments. The numbers we're interested in have to be converted from string values to integers as well.*/
let arguments = process.argv;
let sum = 0;
for(let i = 2; i < arguments.length; i++){
    sum += Number(arguments[i]);
}
console.log(sum);


/*This is a method which reads text from a file and then counts the '\n' characters*/
let filename = process.argv[2];
const fs = require('fs');
let buffer = fs.readFileSync(filename);
let newLines = buffer.toString().split('\n').length - 1;
console.log(newLines);


/* This reads a data file as an extra argument, counts all of the \n characters, and then outputs it to the console*/
let filename2 = process.argv[2];
const fs = require('fs');
fs.readFile(filename2, 'utf-8', function callback(err, data){
    if (err){
        console.error('Error: ' + err);
        return;
    }
    console.log(data.toString().split('\n').length - 1);
});


/* This is an example where the command line provided  directory name and an extension, and the program returns a list of all of the files
in that directory with the provided extension*/
const fs = require('fs');
const path = require('path');
let directoryName = process.argv[2];
let fileType = process.argv[3];
fs.readdir(directoryName, function callback(err, fileList){
    if(err){
        console.error('Error: ' + err);
        return;
    }

    fileList.forEach(function(file){
        if(path.extname(file) === '.' + fileType){
            console.log(file);
        }
    });
});



/*I FUCKING HATE MODULAR JUST LOOK IT UP YOURSELF*/


/* The following is an example of how to perform an HTTP get method */
let http = require('http');
http.get(process.argv[2], function (response){
    response.setEncoding('utf8');
    response.on('data', console.log)
    response.on('error', console.error)
}).on('error', console.error);



/** */
var http = require('http')
var url = process.argv[2]
var body = ''

http.get(url, function (response) {
  response.on('data', function (chunk) {
    body += chunk
  })
  response.on('end', function () {
    console.log(body.length)
    console.log(body)
  })
})


/*An example of juggling ascync.*/

const http = require('http')
const url = process.argv.slice(2)
let resultQueue = []
let counter = 0

for(let i=0;i<url.length;i++){
    http.get(url[i], function(response){
        let result = ""
        response.setEncoding("utf8")
        response.on("data", function(chunk){
            result += chunk
        })
        response.on("end", function(){
            resultQueue[i] = result
            counter ++
            if(counter == url.length){
                resultQueue.forEach(function(item){
                    console.log(item)
                })
            }
        })
    })
}



/*This is an example of establishign a TCP connection and obtaining the time*/
const net = require('net');
function zeroFill(i){
    return (i < 10 ? '0' : '') + i;
}
function now(){
    var time = new Date();
    return time.getFullYear() + '-' + zeroFill(time.getMonth() + 1) + '-' + zeroFill(time.getDate()) + ' ' + zeroFill(time.getHours()) + ":" + zeroFill(time.getMinutes());
}
const server = net.createServer(function (socket){
    socket.end(now() + '\n');
});
server.listen(Number(process.argv[2]));



/*An example of an HTTP server that serves the same text file for each request it receives. It listens on the port provided by the first
argument, the location of the file to serve is the second argment*/
const http = require('http');
const fs = require('fs');
let portNumber = process.argv[2];
let filename3 = process.argv[3];
http.createServer(function(request, response){
    fs.createReadStream(filename3).pipe(response)
}).listen(+portNumber, function(){
    console.log('Server listening on http://localhost:%s', portNumber)
});



/*An example of an HTTP server which receives only POST requests and converts incoming POST body characters to upper-case before returning it.
The server listens on the port provided by the first argument.*/
const http = require('http');
const map = require('through2-map');
let server2 = http.createServer(function(request, response){
    if(request.method != 'POST'){
        return response.end('A POST is required');
    }
    request.pipe(map(function(chunk){
        return chunk.toString().toUpperCase()
    })).pipe(response);
});
server2.listen(Number(process.argv[2]));



/*An example of an HTTP hat serves JSON data when it receives a GET request to the path '/api/parsetime'. */
const http = require('http')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

const server3 = http.createServer(function (req, res) {
  const parsedUrl = new URL(req.url, 'http://example.com')
  const time = new Date(parsedUrl.searchParams.get('iso'))
  let result

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server3.listen(Number(process.argv[2]))