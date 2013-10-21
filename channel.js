var BayeuxChannel = function(path, hub){

  // expects absolute path
  if(path[0] !== '/'){
    throw 'absolute path please!';
  }

  // expects hub
  if(!hub){
    throw 'i need hub!';
  }

  // easy reference to path
  this.path = path;

  // easy reference to hub
  this.hub = hub;

  // delegate publishing to hub.client
  this.publish = function(message){
    this.hub.client.publish(path, message);
  };

  // delegate subscribing to hub.client
  this.subscribe = function(callback){
    this.hub.client.subscribe(path, callback);
  };
};

module.exports = BayeuxChannel;
