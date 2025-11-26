/*This is a method which reads text from a file and then counts the '\n' characters*/
let filename = process.argv[2];
const fs = require('fs');
let buffer = fs.readFileSync(filename);
let newLines = buffer.toString().split('\n').length - 1;
console.log(newLines);