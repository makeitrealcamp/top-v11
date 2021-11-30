const http = require('http');
const fs = require('fs'); // file system
const url = require('url');
const os = require('os');
const util = require('util');

const PORT = 4200;

makeServer = (request, response) => {
  let path = url.parse(request.url).pathname;
  // console.log(path);
  if (path === '/') {
    getPage(request, response);
  } else if (path === '/about') {
    getPage(request, response);
  } else if (path === '/blog') {
    getPage(request, response);
  } else if (path === '/contact') {
    getPage(request, response);
  } else if (path === '/osinfo') {
    osInfoPage(request, response);
  } else {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Not Found');
    response.end();
  }
};

function getPage(req, res) {
  const filename = req.url === '/' ? '/home' : req.url;
  const filePath = `./pages/${filename}.html`;
  fs.readFile(filePath, (err, page) => {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(page);
  });
}

function osInfoPage(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  const osinfo = `<html>
  <head>
  <title>OS Info Page</title>
  </head>
  <body>
  <h1>Top V11 - OS</h1>
  <h2>Server:</h2>
  <table>
    <tr><th>Host Name</th><td>${os.hostname()}</td></tr>
    <tr><th>OS Type</th><td>${os.type()} ${os.platform()} ${os.arch()} ${os.release()}</td></tr>
    <tr><th>CPU</th><td>${util.inspect(os.cpus().map(cpu => cpu.model))}</td></tr>
    <tr><th>Memory</th><td>total: ${os.totalmem()} free: ${os.freemem()}</td></tr>
    <tr><th>Network</th><td>${util.inspect(os.networkInterfaces())}</td></tr>
    <tr><th>Uptime</th><td>${os.uptime()}</td></tr>
  </table>
  <h2>Client:</h2>
  <table>
    <tr><th>Headers</th><td>${req.rawHeaders}</td></tr>
  </table>
  </body>
  </html>`;
  res.end(osinfo);
}
  
const server = http.createServer(makeServer);
  
server.listen(PORT, () => {
  console.log(`Basic node server running on port ${PORT}`);
});