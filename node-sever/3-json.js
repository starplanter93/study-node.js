const http = require('http');

const name = 'jks';
const courses = [
  { name: 'html' },
  { name: 'css' },
  { name: 'js' },
  { name: 'node' },
];

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/courses') {
    if (method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(courses));
    }
    if (method === 'POST') {
      const body = [];
      req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
      });
      req.on('end', () => {
        const bodyStr = Buffer.concat(body).toString();
        const course = JSON.parse(bodyStr);
        courses.push(course);
        console.log(courses);
        res.writeHead(201);
        res.end();
      });
    }
  }
});

server.listen(8080);
