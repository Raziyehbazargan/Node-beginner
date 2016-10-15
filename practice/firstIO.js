var fs = require('fs');


var file =  fs.readFileSync(process.argv[2],'utf8');
console.log(file.split('\n').length-1);
