// const http = require('http')
// const fs = require('fs')
//
// const server = http.createServer(function (req, res) {
//    fs.createReadStream(process.argv[3], 'utf8').pipe(res);
//  });
//
//   server.listen(process.argv[2]);

//--------------------------------------------------------------------------

// Write an HTTP server that receives only POST requests and converts
//   incoming POST body characters to upper-case and returns it to the client.
// const http = require('http')
// const map = require("through2-map")
//
// const server = http.createServer(function (req, res) {
//   if(req.method !== 'POST') return res.end('send me a POST\n');
//
//      req.pipe(map(function (chunk) {
//        return chunk.toString().toUpperCase()
//     })).pipe(res);
//
//  });
//
//   server.listen(Number(process.argv[2]));

//--------------------------------------------------------------------------
// Write an HTTP server that serves JSON data when it receives a GET request
//  to the path '/api/parsetime'. Expect the request to contain a query string
//  with a key 'iso' and an ISO-format time as the value.

const http = require('http');
const fs = require('fs');


const server = http.createServer(function(req, res) {
  const url = require('url').parse(req.url);
  const queryString = require('querystring').parse(req.url.query);

  if(req.method  !== 'GET') return req.end('send me a GET\n request');

    if(req.method === 'GET' && req.url.pathname === '/api/parsetime') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify({
       "hour": 14,
       "minute": 23,
       "second": 15
     }));
   };
});

server.listen(process.argv[2]);
