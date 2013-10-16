var BayeuxChannel = require('../channel');
var BayeuxHub = require('../hub');

describe('BayeuxChannel', function(){

  var hub = new BayeuxHub('https://example.net');
  var path = '/test';

  describe('initialize', function(){

    var channel = new BayeuxChannel(path, hub);

    it('throws error if no path argument');
    it('throws error if path not absolute');

    it('throws error if no hub argument');


    it('should set *path* from argument', function(){
      expect(channel.path).to.equal(path);
    });

    it('should keep reference to *hub* from argument', function(){
      expect(channel.hub).to.be.an.instanceOf(BayeuxHub);
    });
  });

  describe('publish', function(){

    var channel = new BayeuxChannel(path, hub);

    it('should delegate to hub.client.publish', function(){
      sinon.spy(channel.hub.client, 'publish');
      var message = { text: 'yo!' };
      channel.publish(message);
      expect(channel.hub.client.publish).calledWith(path, message);
    });
  });

  describe('subscribe', function(){

    var channel = new BayeuxChannel(path, hub);

    it('should delegate to hub.client.subscribe', function(){
      sinon.spy(channel.hub.client, 'subscribe');
      var callback = function(){};
      channel.subscribe(callback);
      expect(channel.hub.client.subscribe).calledWith(path, callback);
    });
  });
});
