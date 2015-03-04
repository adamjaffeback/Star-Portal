var express = require('express');
var app = express();

app.set('title', 'Adam Back');
app.set('port', process.env.PORT || 3000);
app.set('base url', process.env.URL || 'http://localhost');

var port = app.get('port');

// GET /style.css etc
app.use(express.static(__dirname + '/'));

app.get('/aboutme', function(req, res) {
  res.send("<p>About Me</p>");
});

app.listen(port);
console.log('Listening on port ' + port + '.');