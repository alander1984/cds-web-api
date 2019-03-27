const {ErrorDescription, AuthenticationRequest, AccessToken, CheckTokenRequest} = require('../grpc-generated/Authorization_pb.js');
const {TokenServiceClient} = require('../grpc-generated/Authorization_grpc_web_pb.js');
var Config = require('Config');
var client = new TokenServiceClient(Config.backendAPITestEndpoint);

module.exports = {
    Token: {
        getToken: function (login, pass, clientId, grantType) {
            return new Promise((resolve, reject) => {
                    var request = new AuthenticationRequest();
                    request.setName(login);
                    request.setPass(pass);
                    request.setClientId(clientId);
                    request.setGrantType(grantType)
                    client.getToken(request, {}, (err, token) => {
                    resolve(token); });
            });
        }
    }
}



