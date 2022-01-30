const http = require('http');
const fs = require('fs');

const port = 8080;
const host = 'localhost';
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    //begin modifcation for each url
    if (req.url === '/') {
        //left blank because not required
    } else if (req.url === '/contact') {
        path = path + 'contact.html';
    } else if (req.url === '/about') {
        path = path + 'about.html';
    } else {
        res.statusCode = 404;
        path = path + '404.html';
    }
    //read the file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.write(data);
            res.end();
        }
    });
});

server.listen(port, host, () => {
    console.log('Server port:', port);
});