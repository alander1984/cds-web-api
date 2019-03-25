//protoc -I=./src/proto routes.proto --js_out=import_style=commonjs:./src/grpc-generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./src/grpc-generated
//npm i @grpc-gen/protoc-gen-grpc-web

const {RouteRequest, Route} = require('../grpc-generated/routes_pb.js');
const {RouteServiceClient} = require('../grpc-generated/routes_grpc_web_pb.js');
var Config = require('Config');
var client = new RouteServiceClient(Config.backendAPITestEndpoint);



module.exports = {
  Routes: {
    sendGetRoute: function (id) {
    	return new Promise((resolve, reject) => {
        	var request = new RouteRequest();
        	request.setId(id);
        	client.getRoute(request, {}, (err, route) => {
      			resolve(route);
        	}); 
	});
    }
  }
};


/*module.exports = {
  Routes: {
    sendGetRoute: function () {
        console.log("sending request to http://192.168.63.159:8088");
        var request = new RouteRequest();
        request.setId(1);
        client.getRoute(request, {}, (err, route) => {
            console.log(route.getCode());
        });  
    }
  }
};*/

/*export class RouteAPI {
    static sendGetRoute(){
        var request = new RouteRequest();
        request.setId(1);
        client.getRoute(request, {}, (err, route) => {
            console.log(route.getCode());
        });  
    }
}*/



