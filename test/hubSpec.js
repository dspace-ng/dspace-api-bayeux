var BayeuxHub = require('../hub');
var BayeuxChannel = require('../channel');

describe('BayeuxHub', function(){

  var url = 'https://example.net';

  describe('initialize', function(){

    var hub = new BayeuxHub(url);

    it('should set *url* from argument', function(){
      expect(hub.url).to.equal(url);
    });

    it('should create client based on passed url', function(){
      expect(hub.client).to.be.an.instanceOf(Faye.Client);
      expect(hub.client.endpoint.protocol).to.equal('https:');
      expect(hub.client.endpoint.host).to.equal('example.net');
    });
  });

  describe('getChannel', function(){

    var hub = new BayeuxHub(url);
    var path = '/test';

    it('should return an instance of BayeuxChannel', function(){
      var channel = hub.getChannel(path);
      expect(channel).to.be.an.instanceOf(BayeuxChannel);
    });

    it('should keep reference to itself in a channel', function(){
      var channel = hub.getChannel(path);
      expect(channel.hub).to.equal(hub);
    });

  });
});
