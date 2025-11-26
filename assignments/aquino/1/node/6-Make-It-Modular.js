let filterFiles = require('./6-Make-It-Modular.js');
let directoryName = process.argv[2];
let fileType = process.argv[3];

filterFiles(directoryName, fileType, function (err, fileList){
    if(err){
        console.error('Error: ' + err);
        return;
    }
    fileList.forEach(function(file){
        console.log(file);
    });
});