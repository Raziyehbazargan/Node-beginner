'use strict';

const http = require('http');

const start = module.exports = http.createServer(function(req,res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write('Hello World');
    res.end();
}).listen(8888, function(){
    console.log('server is up on 8888');
});