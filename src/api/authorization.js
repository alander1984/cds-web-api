const {Empty, UserAllResponse} = require('../grpc-generated/AuthEntity_pb.js');
const {UserServiceClient} = require('../grpc-generated/AuthEntity_grpc_web_pb.js');
var Config = require('Config');
var client = new UserServiceClient(Config.backendAPITestEndpoint);
const {CheckTokenRequest} = require('../grpc-generated/Authorization_pb.js');
const {TokenServiceClient} = require('../grpc-generated/Authorization_grpc_web_pb.js');
var tokenServiceCloient = new TokenServiceClient(Config.authAPITestEndpoint);

module.exports = {
  Authorization: {
    sendTryLogin: function (id) {
    	return new Promise((resolve, reject) => {
        	var request = new Empty();
        	client.readAllUser(request, {}, (err, route) => {
      			resolve(route);
        	}); 
	});
    }
  }
}

if ($(location).attr("href").indexOf("/login")==-1) {
    var t = localStorage.getItem('user-token');
    if (t==null) {
        window.location.replace(_ctx+"login")
    }
    var checkTokenRequest = new CheckTokenRequest();
    checkTokenRequest.setToken(t);
    tokenServiceCloient.checkToken(checkTokenRequest, {}, (err, accessToken) => {
    if (err) {
        window.location.replace(_ctx+"login")
    }
}); 
}