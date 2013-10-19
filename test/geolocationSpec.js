var BayeuxGeolocationChannel = require('../geolocation');
var BayeuxHub = require('../hub');

describe('BayeuxGeolocationChannel', function(){

  var hub = new BayeuxHub('https://example.net');
  var path = '/test';

  describe('initialize', function(){

    var channel = new BayeuxGeolocationChannel(path, hub);

    it('should extend Backbone Events', function(){
      expect(channel.on).to.be.a('function');
      expect(channel.trigger).to.be.a('function');
    });


    it('throws error if no path argument');
    it('throws error if path not absolute');

    it('throws error if no hub argument');


    it('should set *path* from argument', function(){
      expect(channel.path).to.equal(path);
    });

    it('should keep reference to *hub* from argument', function(){
      expect(channel.hub).to.be.an.instanceOf(BayeuxHub);
    });

    it('should trigger *position* on message');
  });
});
