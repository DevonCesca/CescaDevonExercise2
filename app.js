const http = require('http');

const port = 8080;
const host = 'localhost';
const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(port, host, () => {
    console.log('Server port:', port);
});