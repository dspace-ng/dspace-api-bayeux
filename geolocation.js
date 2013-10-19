var BayeuxGeolocationChannel = function(path, hub){

  // expects absolute path
  if(path[0] !== '/'){
    throw 'absolute path please!';
  }

  // expects absolute path
  if(!hub){
    throw 'i need hub!';
  }

  // mix in events
  _.extend(this, Backbone.Events);

  // easy reference to path
  this.path = path;

  // easy reference to hub
  this.hub = hub;

  this.hub.client.subscribe(path, function(message){
    this.trigger('position', message);
  }.bind(this));
};

module.exports = BayeuxGeolocationChannel;
