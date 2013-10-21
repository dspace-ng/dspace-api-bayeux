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
  this.pub = function(message){
    // in case we publish models or collections
    if(message.toJSON) {
      message = message.toJSON();
    }
    this.hub.client.publish(path, message);
  };

  // delegate subscribing to hub.client
  this.sub = function(callback){
    this.hub.client.subscribe(path, callback);
  };
};

module.exports = BayeuxChannel;
