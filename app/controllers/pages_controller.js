var locomotive = require('locomotive'),
    Controller = locomotive.Controller;

var pagesController = new Controller();

pagesController.main = function() {
  //console.info("controller");
  this.title = '2Gather';
  this.render();
}

module.exports = pagesController;
