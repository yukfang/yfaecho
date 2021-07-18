var createError   = require('http-errors');
var express       = require('express');
var path          = require('path');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var logger        = require('morgan');

var homeRouter      = require('./routes/home');
var usersRouter     = require('./routes/users');
var delayRouter     = require('./routes/delay');
var defaultRouter   = require('./routes/default');
let test307Router01 = require('./routes/test307step01');

var app = express();

/* */
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.raw());

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/307step1', test307Router01);
// app.use('/307step2', test307Router02);
app.use('/users', usersRouter);
app.use('/delay/*', delayRouter);
app.use('/*', defaultRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
