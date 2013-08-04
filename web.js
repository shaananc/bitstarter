#!/usr/bin/node
var express = require('express');
var fs = require('fs');
var htmlfile = "index.html"
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var html = fs.readFileSync(htmlfile).toString();
    response.send(html);
    //response.send(htmlbuf.toString('utf-8'));
});

app.get('/img/*.*', function(req, rsp){
    	var img = fs.readFileSync('img/'+req.params[0]+'.'+req.params[1]);
	rsp.writeHead(200, {"Content-Type": "image/jpg"});
	rsp.end(img, "binary");
	console.log(req);	
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
