'use strict';

const http = require('http');

const server =http.createServer(function(req,res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write('Hello World');
    res.end();
}).listen(3000, function(){
    console.log('server is up on 3000');
});