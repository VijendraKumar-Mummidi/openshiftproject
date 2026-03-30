const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello from OpenShift Deployment!');
    res.end();
});

server.listen(3000);