var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.arguments(bodyparser.urlencoded({ extended: false }));
app.get('/', function(req, res) {
    res.sendFile('index.html');
});
app.post('/submit-data', function(req, res) {
    var name = req.body.firstname + '' + req.body.lastname;
    res.send(name + 'submitted Sucessfully');
});

var server = app.listen(3300, function() {
    console.log('Node server is running.. ');
});