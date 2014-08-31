var util = require('util'),
    
    express = require('express'),
    methodOverride = require('method-override'),
    passport = require('passport'), 
    poweredBy = require('connect-powered-by'),
    mongoose = require('mongoose'),
    mongoStore = require('connect-mongodb'),
    flash = require('connect-flash');


module.exports = function() {
  // Warn of version mismatch between global "lcm" binary and local installation
  // of Locomotive.
  if (this.version !== require('locomotive').version) {
    console.warn(util.format('version mismatch between local (%s) and global (%s) Locomotive module', require('locomotive').version, this.version));
  }

  //logging: 
  this.use(require('morgan')('dev'));

  
  this.use(express.favicon());
  this.use(poweredBy('2GatherLabs'));
  // allow for put and delete methods, instead of post.
  this.use(methodOverride('X-HTTP-Method-Override'));
  
  this.set('views', __dirname + '/../../app/views');
  this.set('view engine', 'jade');

  this.use(express.cookieParser('cookie secret pw'));
  this.use(express.session({secret: 'session secret', cookie: { maxAge: 60000 }}));
  this.use(flash());
  this.use(passport.initialize());
  this.use(passport.session());
  
  this.use(this.router);
  this.use(express.static('public'));
  
  //this.use(formidable());

  this.datastore(require('locomotive-mongoose'));
}
