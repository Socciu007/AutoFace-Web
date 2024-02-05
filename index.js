var express = require('express');
var app = express();
// set the view engine to ejs
app.use(express.static('public'));

//ejs setup
app.set('view engine', 'ejs');

// index page
app.get('/', function (req, res) {
  res.render('pages/index');
});
// index page
app.get('/download', function (req, res) {
  res.render('pages/download');
});

// use res.render to load up an ejs view file

app.listen(8080);
console.log('Server is listening on port 8080');
