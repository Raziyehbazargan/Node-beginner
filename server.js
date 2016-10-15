'use strict';

const http = require('http');
const url = require('url');

function start(route, handle) {
    function onRequest(req,response) {
        var pathname = url.parse(req.url).pathname;
        console.log("Request for " + pathname + " received.")
        
        route(handle , pathname, response);
    };
    http.createServer(onRequest).listen(8888)
    console.log('server is up on 8888');
};

exports.start = start;

