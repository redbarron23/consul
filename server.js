var http = require('http');

// port can be derived from ENV or defaults to 9000

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  var port = process.env.PORT || 9000;
  var resp = {
        port
        };
  res.end(JSON.stringify(resp));
});
server.listen(8080);
