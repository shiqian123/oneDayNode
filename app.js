'use strict';
//
// import express from 'express';
// import path from 'path';
// import favicon from 'serve-favicon';
// import logger from 'morgan';
// import cookieParser from 'cookie-parser';
// import bodyParser from 'body-parser';
//
// import routes from './routes/index';
// import favicons from 'connect-favicons';
// import mongoose from 'mongoose';
// import config from './common/config'
var express = require('express');
var path  = require('path');
var favicon = require('serve-favicon');
var logger  = require('morgan');
var cookieParser  = require( 'cookie-parser');
var bodyParser  = require('body-parser');

var routes  = require('./routes/index');
var favicons  = require( 'connect-favicons');
var mongoose  = require( 'mongoose');
var config  = require( './common/config')
const app = express();
var fs = require('fs');
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
   //res.header("Content-Type", "multipart/form-data");
  next();
});
// // view engine setup
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
// app.use('/users', users);
app.use(favicons(__dirname + '/public/img/icons'));
app.use(express.static(path.join(__dirname, '/public')));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
mongoose.Promise = global.Promise;
mongoose.connect(config.db);
const db = mongoose.connection;
db.once('open', function () {
  console.log('has been connected.', config.db);
});

var server = app.listen(config.port, function () {
  console.log(11)
  var host = server.address().address;
  var port = server.address().port;
  console.log(' app listening at http://%s:%s', host, port);
});
// var io = require('socket.io').listen(server);
// io.on('connection', function (socket) {
//   // socket.emit('news', { hello: 'world' });
//   // socket.on('my other event', function (data) {
//   //   console.log(data);
//   // });
//   socket.on('stop',function (a) {
//     console.log(a)
//   });
// });
