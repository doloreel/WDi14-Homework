var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type":"text/html"
    });
    res.end('Hello World');
}).listen(3005, "127.0.0.1");
