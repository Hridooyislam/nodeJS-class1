
const http = require('http');
const server = http.createServer((req, res) => {
    const url = req.url;

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<h1>Hello, Welcome to our server!</h1>');
        res.end();
    } else if (req.url === '/users') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<ul><li>user 1</li></ul>');
        res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});

server.listen(3000);