const http = require('http');
const fs = require('fs');
// the http module has a createServer method.
// Takes 1 arg
// 1. callbacks, callbacks, has 2 args: req, res
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    //res = ouw way of responding to the requester.
    //http message.
    //1. start line check
    //2. header
    //3. body
    //writeHead takes 2 args.
    //1. status code.
    //2. object for the mime-type
    res.writeHead(200, { 'content-type': 'text/html' });
    const homepagehtmpl = fs.readFileSync('node.html');

    res.write(homepagehtmpl);
    res.end();
  } else if (req.url === '/node.png') {
    res.writeHead(200, { 'content-type': 'image/png' });
    const png = fs.readFileSync('node.html');

    res.write(png);
    res.end();
  } else if (req.url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' });
    const css = fs.readFileSync('styles.css');

    res.write(css);
    res.end();
  } else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write("<h4>Soryy this isn't the page you're looking for!</h4>");
    res.end();
  }
});
// createServer returns an object with a listen method
// Listen takes 1 arg:
// 1. port to listen for http traffic on.
server.listen(3000);
