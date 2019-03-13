const {RouteRequest, RouteReply} = require('./helloworld_pb.js');
const {RouteClient} = require('./helloworld_grpc_web_pb.js');

var client = new RouteClient('http://localhost:8030');

var request = new RouteRequest();
request.setId(1);

client.getRoute(request, {}, (err, response) => {
  console.log(response.getMessage());
});