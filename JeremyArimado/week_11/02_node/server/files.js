var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type":"text/html"
    });
    fs.createReadStream(__dirname + "/data.txt").pipe(res);
}).listen(3005, "127.0.0.1");
