const {ErrorDescription, AuthenticationRequest, AccessToken, CheckTokenRequest} = require('../grpc-generated/Authorization_pb.js');
const {TokenServiceClient} = require('../grpc-generated/Authorization_grpc_web_pb.js');
var Config = require('Config');
var tokenServiceClient = new TokenServiceClient(Config.authAPIendpoint);

module.exports = {
    Token: {
        getToken: function (login, pass, clientId, grantType) {
            return new Promise((resolve, reject) => {
                    var request = new AuthenticationRequest();
                    request.setName(login);
                    request.setPass(pass);
                    request.setClientid(clientId);
                    request.setGranttype(grantType);
                    tokenServiceClient.getToken(request, {}, (err, token) => {
                    resolve(token); });
            });
        }
    }
}


if ($(location).attr("href").indexOf("/login")===-1) {
    var t = localStorage.getItem('user-token');
    if (t===null) {
        window.location.replace(_ctx+"/login")
    }
    var checkTokenRequest = new CheckTokenRequest();
    checkTokenRequest.setToken(t);
    tokenServiceClient.checkToken(checkTokenRequest, {}, (err, accessToken) => {
    if (err) {
        window.location.replace(_ctx+"/login")
    }
}); 
}

