var fs = require('fs');

function finishrereading(err,data){
	if (err) console.log(err);
	console.log(data.toString());
	console.log("Finish re-reading file!")
}

function rereadingFile(err){
	if (err) console.log(err)
		console.log("Finish appending file")
	console.log("Begin re-reading file!")
	fs.readFile("input.txt", finishrereading)
}

function appendFile(err,data){
	if (err) console.log(err);
	console.log(data.toString())
	console.log('Finish reading file')
	console.log("Begin appending file");
	fs.appendFile("input.txt","text to append",rereadingFile);
}

console.log("Begin reading file");
fs.readFile("input.txt", appendFile);
