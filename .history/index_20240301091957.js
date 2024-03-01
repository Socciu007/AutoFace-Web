var express = require('express');
const { I18n } = require('i18n');
const path = require('path');
var app = express();
const cookieParser = require('cookie-parser');

//set language
app.use(cookieParser());
const i18n = new I18n({
  locales: ['en', 'vi'],
  directory: path.join(__dirname, '/locales'),
  cookie: 'lang',
});
app.use(i18n.init);

app.use('/change-lang/:lang', (req, res) => {
  res.cookie('lang', req.params.lang, { maxAge: 1000000 });
  res.redirect('back');
});
// set the view engine to ejs
app.use(express.static('public'));

//ejs setup
app.set('view engine', 'ejs');

// index page
app.get('/', function (req, res) {
  res.render('pages/index', {
    cookies: req.cookies,
  });
});

// index page
app.get('/download', function (req, res) {
  res.render('pages/download', {
    cookies: req.cookies,
  });
});

// use res.render to load up an ejs view file

app.listen(8080);
console.log('Server is listening on port 8080');
