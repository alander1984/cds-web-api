//protoc -I=./src/proto routes.proto --js_out=import_style=commonjs:./src/grpc-generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./src/grpc-generated
//npm i @grpc-gen/protoc-gen-grpc-web
//process.env.NODE_CONFIG_DIR = './config';


/*export class RouteAPI {
    static sendGetRoute(){
        var request = new RouteRequest();
        request.setId(1);
        client.getRoute(request, {}, (err, route) => {
            console.log(route.getCode());
        });  
    }
}*/

module.exports = {
  ...require('./api/routes.js'),
  /*...require('./api/authorization.js'),*/
  ...require('./api/token.js'),
  ...require('./api/roles.js'),
  ...require('./api/permissions.js'),
  ...require('./api/driver.js'),
  ...require('./api/transport_company.js'),
  ...require('./api/vehicle.js'),
  ...require('./api/stores.js') 
 }

