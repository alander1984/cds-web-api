const {Route, RoutePoint, OptimizationTask, RouteAllResponse} = require(
    '../grpc-generated/routes_pb.js');
const {EntityIdRequest, Vehicle, Driver, TransportCompany} = require(
    '../grpc-generated/Transport_pb.js');   
const {Empty} = require(
    '../grpc-generated/common_pb.js');
const {RouteServiceClient} = require('../grpc-generated/routes_grpc_web_pb.js');
var Config = require('Config');
var clientRoute = new RouteServiceClient(Config.backendRFPEndpoint);

module.exports = {
  RouteService: {
    sendAllRoutes: function () {
      return new Promise((resolve, reject) => {
        console.log("In sendAllRoutes function");
        var request = new Empty();
        console.log("0");
        clientRoute.readAllRoutes(request, {}, (err, routes) => {
          console.log("1");
          let listRoutes = [];
          console.log("2");
          let p = routes.getRoutesList();
          console.log("3");
          p.forEach(function(item, index, p){
              console.log('####WEB API PARSE ROUTE WITH ID: ' + item.getId());
            let route = {};
            route.id = item.getId();
            route.name = item.getName();
            route.deliveryDate = item.getDeliverydate();

            let _vehicle = item.getVehicle();

            if (Object.keys(_vehicle).length !== 0 && _vehicle.constructor !== Object) {
              let vehicle = {};
              vehicle.id = _vehicle.getId();
              vehicle.registrationNumber = _vehicle.getRegistrationnumber();
              vehicle.model = _vehicle.getModel();
              vehicle.tonnage = _vehicle.getTonnage();
              vehicle.capacity = _vehicle.getCapacity();

              route.vehicle = vehicle;
            }

            let _tc = item.getTransportcompany();
            if (Object.keys(_tc).length !== 0 && _tc.constructor !== Object) {
              let tc = {};
              tc.id = _tc.getId();
              console.log('get code start');
              tc.code = _tc.getCode();
              console.log('get code end');
              tc.name = _tc.getName();

              route.transportcompany = tc;
            }
            
            var _routepoints = item.getRouterpointsList();
            if(Object.keys(_routepoints).length !== 0) {
                console.log('###WEB API GET ROUTE POINTS LIST');
                var routepoints = [];
                _routepoints.forEach(function(_rp, i, arr) {
                   var routePoint = {};
                   routePoint.id = _rp.getId();
                   routePoint.arrivalTime = _rp.getArrivaltime();
                   routePoint.pos = _rp.getPos();
                   console.log(_rp.getDelivery().getLon());
                   if(_rp.getDelivery()) {
                       console.log('#### WEB API GET DELIVERY FOR ROUTE POINT');
                       var delivery = {};
                       var _delivery = _rp.getDelivery();
                       console.log('###PARSE DELIVERY');
                       delivery.id = _delivery.getId();
                       delivery.lon = _delivery.getLon();
                       
                       delivery.lat = _delivery.getLat();
                       delivery.city = _delivery.getCity();
                       delivery.street = _delivery.getStreet();
                       delivery.house = _delivery.getHouse();
                       delivery.flat = _delivery.getFlat();
                       delivery.entrance = _delivery.getEntrance();
                       console.log(delivery);
                       routePoint.delivery = delivery;
                   }
                   console.log('####ROUTE POINT');
                   console.log(routePoint);
                   routepoints.push(routePoint);
                   console.log('###PUSH INTO ROUTEPOINTS');
                });
                route.routepoints = routepoints;
                console.log('####END CYCLE');
                console.log(route);
            }

//            let _optTask = item.getOptimizationtask();
//            if (Object.keys(_optTask).length !== 0 && _optTask.constructor !== Object) {
//              //TODO implement
//            }

            console.log("Item of getDriversList - " + item);
            listRoutes.push(route);
          });
          console.log('!!!!!Finally routes list');
          console.log(listRoutes);
          resolve(listRoutes);
        });
      });
    },

    createOrUpdateRoute: function (driver) {
      console.log("In createOrUpdateRoute function");
      return new Promise((resolve, reject) => {
        let request = new Driver();
        if (driver.id) request.setId(driver.id);
        

        let drVehicles = [];
        let tmp = driver.vehicles;
        tmp.forEach(function (item, tmp) {
          let vehicle = new Vehicle();
          vehicle.setId(item.id);
          vehicle.setRegistrationnumber(item.registrationNumber);
          vehicle.setModel(item.model);
          vehicle.setTonnage(item.tonnage);
          vehicle.setCapacity(item.capacity);
          drVehicles.push(vehicle);
        });

        request.setVehiclesList(drVehicles);
        clientRoute.createOrUpdateRoute(request, {}, (err, response) => {
          resolve(response);
        });
      });
    },
    sendGetRoute: function (id) {
      console.log("In sendGetRoute function");
      return new Promise((resolve, reject) => {
        var request = new EntityIdRequest();
        request.setId(id);
        clientRoute.readByIdRoute(request, {}, (err, route) => {
          resolve(route);
        });
      });
    },
    deleteRoute: function (id) {
      console.log("In deleteRoute function");
      return new Promise((resolve, reject) => {
        var request = new EntityIdRequest();
        request.setId(id);
        console.log("REQUEST.DELETE.ID  " + request.getId());
        clientRoute.deleteByIdRoute(request, {}, (err, response) => {
          resolve(response);
        });
      });
    }
  }
};




