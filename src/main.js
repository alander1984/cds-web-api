//protoc -I=. routes.proto --js_out=import_style=commonjs:../grpc-generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:../grpc-generated
//npm i @grpc-gen/protoc-gen-grpc-web

const {RouteRequest, Route} = require('./grpc-generated/routes_pb.js');
const {RouteClient} = require('./grpc-generated/routes_grpc_web_pb.js');

var client = new RouteClient('http://localhost:8030');

var request = new RouteRequest();
request.setId(1);

client.getRoute(request, {}, (err, route) => {
  console.log(route.getMessage());
});