// create web server
// create web server for comments
var express = require('express');
var app = express();
var fs = require('fs');

// create web server for comments
app.get('/comments', function(req, res) {
  fs.readFile('comments.json', function(err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.listen(3000);
console.log('Server started: http://localhost:3000/comments');



