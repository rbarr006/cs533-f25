const fs = require('fs');
const path = require('path');

module.exports = function (directoryName, fileType, callback){
    fs.readdir(directoryName, function(err, fileList){
        if(err){
            return callback(err);
        }

        fileList = fileList.filterFiles(function (file){
            return path.extname(file) === '.' + fileType;
        });
    callback(null, fileList);
    });
};
