const net = require('net');
var strftime = require('strftime');


const server = net.createServer(function (socket) {
  var data = strftime('%F %R', new Date());
  socket.end(data +'\n');
}).on('error', console.error);

server.listen(process.argv[2]);
