var util = require('util'),
    express = require('express'),
    methodOverride = require('method-override'),
    passport = require('passport'), 
    poweredBy = require('connect-powered-by'),
    mongoose = require('mongoose'),
    mongoStore = require('connect-mongodb');

module.exports = function() {
  // Warn of version mismatch between global "lcm" binary and local installation
  // of Locomotive.
  if (this.version !== require('locomotive').version) {
    console.warn(util.format('version mismatch between local (%s) and global (%s) Locomotive module', require('locomotive').version, this.version));
  }

  //logging: 
  this.use(require('morgan')('dev'));

  
  this.use(poweredBy('2GatherLabs'));
  this.use(express.favicon());
  
  // allow for put and delete methods, instead of post.
  this.use(methodOverride('X-HTTP-Method-Override'));
  
  this.set('views', __dirname + '/../../app/views');
  this.set('view engine', 'jade');

  this.use(express.cookieParser());


  this.use(express.session({secret: 'thisapphasasecret'}));
  
  this.use(passport.initialize());
  this.use(passport.session());
  
  
  this.use(this.router);
  this.use(express.static(__dirname + '/../../public/'));
  
  //this.use(formidable());

  this.datastore(require('locomotive-mongoose'));
}
