const {Route, RoutePoint, OptimizationTask, RouteAllResponse} = require(
    '../grpc-generated/routes_pb.js');
const {EntityIdRequest, Vehicle, Driver, TransportCompany} = require(
    '../grpc-generated/Transport_pb.js');
const {Empty} = require(
    '../grpc-generated/common_pb.js');
const {Store} = require(
    '../grpc-generated/stores_pb.js');
const {RouteServiceClient} = require('../grpc-generated/routes_grpc_web_pb.js');
var Config = require('Config');
var clientRoute = new RouteServiceClient(Config.backendRFPEndpoint);

module.exports = {
  RouteService: {
    sendAllRoutes: function () {
      return new Promise((resolve, reject) => {
        console.log("In sendAllRoutes function");
        var request = new Empty();
        clientRoute.readAllRoutes(request, {}, (err, routes) => {
          let listRoutes = [];
          let p = routes.getRoutesList();
          p.forEach(function (item, index, p) {
            let route = {};
            route.id = item.getId();
            route.name = item.getName();
            route.deliveryDate = item.getDeliverydate();

            let _vehicle = item.getVehicle();
            if (Object.keys(_vehicle).length !== 0 && _vehicle.constructor
                !== Object) {
              let vehicle = {};
              vehicle.id = _vehicle.getId();
              vehicle.registrationNumber = _vehicle.getRegistrationnumber();
              vehicle.model = _vehicle.getModel();
              vehicle.tonnage = _vehicle.getTonnage();
              vehicle.capacity = _vehicle.getCapacity();

              //set drivers of vehicle
              let listDrivers = [];
              let dr = _vehicle.getDriversList();
              dr.forEach(function (item, index, dr) {
                let driver = {};
                driver.id = item.getId();
                driver.name = item.getName();
                driver.surname = item.getSurname();
                driver.patronymic = item.getPatronymic();
                listDrivers.push(driver);

              });
              vehicle.drivers = listDrivers;

              route.vehicle = vehicle;
            }

            let _tc = item.getTransportcompany();
            if (Object.keys(_tc).length !== 0 && _tc.constructor !== Object) {
              let tc = {};
              tc.id = _tc.getId();
              tc.code = _tc.getCode();
              tc.name = _tc.getName();
              route.transportcompany = tc;
            }

            //TODO implement
            //let _optTask = item.getOptimizationtask();
            //if (Object.keys(_optTask).length !== 0 && _optTask.constructor !== Object) {
            //
            //}

            let _store = item.getStore();
            let store = {};
            store.id = _store.getId();
            store.name = _store.getName();
            console.log("Store is : " + store.id + " - " + store.name);
            route.store = store;

            console.log("Item of getDriversList - " + item);
            listRoutes.push(route);
          });
          resolve(listRoutes);
        });
      });
    },

    createOrUpdateRoute: function (route) {
      console.log("In createOrUpdateRoute function");
      return new Promise((resolve, reject) => {
        let request = new Route();
        if (route.id) {
          request.setId(route.id);
        }
        
        request.setName(route.name);
        request.setDeliverydate(route.deliveryDate);

        let vehicle = new Vehicle();
        vehicle.setId(route.vehicleId);
        request.setVehicle(vehicle);

        let _tc = new TransportCompany();
        _tc.setId(route.transportcompanyId);
        request.setTransportcompany(_tc);

        //TODO add Store import
        let _st = new Store();
        _st.setId(route.storeid);
        request.setStore(_st);
        
        // let _ot = new OptimizationTask();
        // _ot.setId(route.optimizationtask.id);
        // request.setOptimizationtask(_ot);
        
        
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




