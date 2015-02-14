var express = require('express');
var app = express();

app.set('title', 'Adam Back');
app.set('port', process.env.PORT || 3000);
app.set('base url', process.env.URL || 'http://localhost');

var port = app.get('port');

app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(port);
console.log('Listening on port ' + port + '.');