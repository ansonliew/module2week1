var fs = require('fs');

console.log('Start reading file')
fs.readFile('input.txt', 
	function(err,data){
		if(err) console.error(err);
		console.log(data.toString())
		console.log("Finish reading file");
		console.log("Begin appending file");
		fs.appendFile('input.txt','data to append',
			(err)=>{
				if (err) throw err;
				console.log('Finish appending file');
				console.log('Begin re-reading file!');
				fs.readFile("input.txt",
					function(err,data){
						if (err) console.log(err);
						console.log(data.toString());
						console.log('Finish re-reading file!')
					})
			});

	})
