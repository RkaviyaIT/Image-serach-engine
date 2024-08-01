var http = require('http');
var fs=require('fs');
//create a server object:
http.createServer(function (req, res) {
  fs.readFile('project.html',function(err,data){
    res.writeHead(200,'content-type:text/html');
    res.write(data);
    return res.end()
  })
}).listen(3001); //the server object listens on port 8080