var Faye = require('faye');
var BayeuxChannel = require('./channel');

var BayeuxHub = function(url){

  // save url for easy access
  this.url = url;

  // setup client using Faye
  this.client = new Faye.Client(url);

  // creates channel with given path
  this.getChannel = function(path){
    return new BayeuxChannel(path, this);
  };

};

module.exports = BayeuxHub;
