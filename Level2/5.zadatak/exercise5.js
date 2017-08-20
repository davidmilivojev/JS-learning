var http = require('http');

http.createServer(function(req, res){
  res.writeHeader(200, {"Content-Type": "text/html"});
  res.write(` <h1 style="color: green"> Status:200 OK </h1> `);
  res.end(`<h2> Hello word! </h2>`);
}).listen(9001);

console.log('server is up and running');


// pokretanje > node exercise5.js  i onda u browseru localhost:9001
