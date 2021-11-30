const http = require('http');
const url = require('url');
const os = require('os');
const util = require('util');

const PORT = 4200;

makeServer = (request, response) => {
  let path = url.parse(request.url).pathname;
  console.log(path);
  if (path === '/') {
    homePage(request, response);
  } else if (path === '/about') {
    aboutPage(request, response);
  } else if (path === '/blog') {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Read our blog posts!');
    response.end();
  } else if (path === '/contact') {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Get in touch with us!');
    response.end();
  } else if (path === '/osinfo') {
    osInfoPage(request, response);
  } else {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Not Found');
    response.end();
  }
};

function homePage(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  const home = `<html>
  <head>
  <title>Home Page Topv11</title>
  </head>
  <body>
  <h1>Top V11</h1>
  <p>
    <a href='/about'>About</a>
  </p>
  <p>
    <a href='/blog'>Blog</a>
  </p>
  <p>
    <a href='/contact'>Contact</a>
  </p>
  <p>
    <a href='/osinfo'>OS Info</a>
  </p>
  </body>
  </html>`;
  res.end(home);
}

function aboutPage(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  const about = `<html>
  <head>
  <title>About Page</title>
  <style>
    h1 {
      color: red;
    }
    .social-media {
      color: blue;
    }
  </style>
  </head>
  <body>
  <h1>About Top V11</h1>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  </p>
  <h2 id='social-media'>Social Media</h2>
  <ul id='social-media-list'>
    <li>
      <a href='https://github.com/makeitrealcamp/'>Github</a>
    </li>
    <li>
      <a href='https://www.linkedin.com/company/make-it-real-camp/'>LinkedIn</a>
    </li>
  </ul>
  <script type='text/javascript'>
    console.log(document);
    console.log('Before changing color', Date.now());
    document.getElementById('social-media').classList.add('social-media');
    console.log('After changing color', Date.now());
    const socialLinks = ['https://github.com/makeitrealcamp/', 'https://www.linkedin.com/company/make-it-real-camp/'];
    let linlItem1 = document.createElement('li')
    document.getElementById('social-media-list').appendChild(linlItem1);
  </script>
  </body>
  </html>`;
  res.end(about);
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