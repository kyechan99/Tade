// npm
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

// Route
var index = require('./routes/index');

var app = express();

// set
app.set('view engine', 'jade');
app.set('views', './views');

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/vue/dist'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
// app.use('/img', express.static(__dirname + '/'))

app.use('/', index);

app.use(function(req, res, next) {
    var err = new Error('Not Found - 404');
    err.status = 404;
    next(err);
});

app.listen(8080, function(){
    console.log("Connected 8080 port");
});

module.exports = app;