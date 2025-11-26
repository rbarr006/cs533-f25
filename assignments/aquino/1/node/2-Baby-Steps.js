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