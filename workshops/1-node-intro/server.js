const http = require('http');
const url = require('url');

const PORT = 4200;

makeServer = (request, response) => {
  let path = url.parse(request.url).pathname;
  console.log(path);
  if (path === '/') {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(`Hello Topv11!`);
  } else if (path === '/about') {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Know more about us!');
  } else if (path === '/blog') {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Read our blog posts!');
  } else if (path === '/contact') {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Get in touch with us!');
  } else {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Not Found');
  }
  response.end();
};
  
const server = http.createServer(makeServer);
  
server.listen(PORT, () => {
  console.log(`Basic node server running on port ${PORT}`);
});