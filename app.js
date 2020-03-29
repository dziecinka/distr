const http = require(‚http’);

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('{"statusCode":404,"error":"Not Found","message":"Cannot GET /"}');
});

server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
