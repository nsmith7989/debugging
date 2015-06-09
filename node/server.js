var http = require('http');
var fs = require('fs');

var file = 'log.txt';

http.createServer(function (req, res) {

    var body = '';
    req.on('data', function(data) {
        body += data;
    });

    req.on('end', function() {
        fs.appendFile(file, body + '\n');
    });

    res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
    res.end();
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');