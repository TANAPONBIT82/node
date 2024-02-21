var http = require('http');
server = http.createServer(function(req, res) {
    if (req.url == "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.write('<html><body></body>This is HOME Page</html>');
        res.end();
    } else if (req.url == "/student") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body></body>This is STUDENT Page</html>');
        res.end();
    } else if (req.url == "/admin") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body></body>This is ADMIN Page</html>');
        res.end();
    } else
        res.end('Invalid Request');
});
server.listen(3300);
console.log('Node.js web server at port 3300 is running.. ')