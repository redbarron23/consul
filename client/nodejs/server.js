var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  var foo = process.env.foo;
  var resp = {
	foo: foo,
	hello: "hello from Http and " + "foo"
	};
  res.end(JSON.stringify(resp));
});
