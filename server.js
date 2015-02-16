var express = require('express');
var app = express();

app.set('title', 'Adam Back');
app.set('port', process.env.PORT || 3000);
app.set('base url', process.env.URL || 'http://localhost');

var port = app.get('port');

// GET /style.css etc
app.use(express.static(__dirname + '/'));


// app.get('/bootstrap', function(req, res) {
//   res.sendFile
// })
// app.route('/bootstrap')
//   .all(function(request, response, next) {
//     response.sendFile('indexB.html', null, function(error) {
//       if( error ) {
//         console.error( 'Error sending indexb.html' );
//         response.status( error.status ).end();
//       } else {
//         console.log( 'Served Bootstrap version.' )
//       }
//     });
//   });

app.listen(port);
console.log('Listening on port ' + port + '.');