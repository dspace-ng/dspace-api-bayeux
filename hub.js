var Faye = require('faye');
var BayeuxChannel = require('./channel');
var BayeuxGeolocationChannel = require('./geolocation');

var BayeuxHub = function(url){

  // save url for easy access
  this.url = url;

  // setup client using Faye
  this.client = new Faye.Client(url);

  // creates channel with given path
  this.getChannel = function(path){
    return new BayeuxChannel(path, this);
  };

  // creates geolocation channel with given path
  this.getGeolocationChannel = function(path){
    return new BayeuxGeolocationChannel(path, this);
  };

};

module.exports = BayeuxHub;
