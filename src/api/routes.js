const {Route, RoutePoint, OptimizationTask, RouteAllResponse} = require(
    '../grpc-generated/routes_pb.js');
const {EntityIdRequest, Vehicle, Driver} = require(
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
              tc.id = item.getId();
              tc.code = item.getCode();
              tc.name = item.getName();

              route.transportcompany = tc;
            }

            let _optTask = item.getOptimizationtask();
            if (Object.keys(_optTask).length !== 0 && _optTask.constructor !== Object) {
              //TODO implement
            }

            console.log("Item of getDriversList - " + item);
            listRoutes.push(route);
          });
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




