const {Empty, UserAllResponse} = require('../grpc-generated/AuthEntity_pb.js');
const {UserServiceClient} = require('../grpc-generated/AuthEntity_grpc_web_pb.js');
const {CheckTokenRequest} = require('../grpc-generated/Authorization_pb.js');
var Config = require('Config');
var client = new UserServiceClient(Config.authAPIendpoint);


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
};

