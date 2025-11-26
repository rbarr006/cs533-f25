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
