const fs = require("fs");
const path = require("path");
const http = require('http');



const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, {
      "Content-type": "text/html"
    })

    if (req.url === '/') {
      fs.readFile(
        path.join(__dirname, 'index.html'),
        'utf-8',
        (err, data) => {
          if (err) throw err
          res.end(data)
        })
    }

    if (req.url === '/about') {
      fs.readFile(
        path.join(__dirname, 'about.html'),
        'utf-8',
        (err, data) => {
          if (err) throw err
          res.end(data)
        })
    }
  }

  else if (req.method === "POST") {
    const body = [];

    req.on('data', (data) => {
      body.push(Buffer.from(data).toString());
    })

    req.on('end', () => {
      console.log(body);
      const message = body[0].split('=')[1];

      res.end(`
        <h1>Your message: ${message}</h1>
      `)
    })
  }
})

server.listen(3000, () => {
  console.log("Server is running...")
})

