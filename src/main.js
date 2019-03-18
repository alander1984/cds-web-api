//protoc -I=./src/proto routes.proto --js_out=import_style=commonjs:./src/grpc-generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./src/grpc-generated
//npm i @grpc-gen/protoc-gen-grpc-web


/*export class RouteAPI {
    static sendGetRoute(){
        var request = new RouteRequest();
        request.setId(1);
        client.getRoute(request, {}, (err, route) => {
            console.log(route.getCode());
        });  
    }
}*/



