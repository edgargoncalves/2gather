var locomotive = require('locomotive');
var passport = require('passport');
var Controller = locomotive.Controller;
var Account = require('../models/account');


var AccountController = new Controller();

AccountController.show = function() {
  if (!this.req.isAuthenticated())
    return this.res.redirect('/login');

  this.user = this.req.user;
  this.render();
};

AccountController.new = function() {
  this.render();
};

AccountController.loginForm = function() {
  this.render();
};

AccountController.create = function() {
  var account = new Account();

  account.email = this.param('email');
  account.password = this.param('password');
  account.name.first = this.param('name.first');
  account.name.last = this.param('name.last');

  var self = this;
  account.save(function (err) {
    if (err)
      return self.redirect('/new');
    return self.redirect('/login');
  });
};

AccountController.login = function() {
  this.req.flash('info', 'did you make it?? :)');
  passport.authenticate('local', {
    successRedirect: '/show',
    failureRedirect: '/login' }
  )(this.__req, this.__res, this.__next);
};

AccountController.logout = function() {
  this.req.logout();
  this.redirect('/login');
};

module.exports = AccountController;