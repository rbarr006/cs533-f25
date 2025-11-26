/* This reads a data file as an extra argument, counts all of the \n characters, and then outputs it to the console*/
let arguments = process.argv;
let filename = arguments[2];
const fs = require('fs');
fs.readFile(filename, 'utf-8', function callback(err, data){
    if (err){
        console.error('Error: ' + err);
        return;
    }
    console.log(data.toString().split('\n').length - 1);
});
