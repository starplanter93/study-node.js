const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.headers);
  res.write('welcome');
  res.end();
});

server.listen(8080);
