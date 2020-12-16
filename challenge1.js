var fs = require('fs');

console.log("Start reading file");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log('Finish reading file');
console.log('Begin appending file');
fs.appendFileSync('input.txt','text to append');
console.log('Finish appending file');
console.log('Begin re-reading file');
var newData = fs.readFileSync('input.txt');
console.log(newData.toString());
console.log('Finish re-reading file');