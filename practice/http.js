const http = require('http');
const bl = require('bl');

// http.get(process.argv[2] , function (response) {
//     response.setEncoding('utf8');
//     response.on('data', function(data) {
//     console.log(data.toString());
//   });
//   response.on('error', console.error)
// }).on('error', console.error);

http.get(process.argv[2] , function (response) {
  response.pipe(bl(function (err, data) {
    if(err) return console.error(err);

    console.log(data.toString().length);
    console.log(data.toString());
  }))
}).on('error', console.error);
