
    process.on('uncaughtException', function(err) {
        console.log('wwtwwt: ' + err);
    });


var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(10241,"127.0.0.1");
document.getElementById('message').innerHTML =  'Server running at http://127.0.0.1:10241/' + "<br> "+ http.toString();