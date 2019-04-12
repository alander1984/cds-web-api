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

            //TODO implement
            //let _optTask = item.getOptimizationtask();
            //if (Object.keys(_optTask).length !== 0 && _optTask.constructor !== Object) {
            //
            //}

            let _store = item.getStore();
            let store = {};
            store.id = _store.getId();
            store.name = _store.getName();
            route.store = store;

            let _driver = item.getDriver();
            let driver = {};
            driver.id = _driver.getId();
            driver.name = _driver.getName();
            driver.surname = _driver.getSurname();
            driver.patronymic = _driver.getPatronymic();

            route.driver = driver;

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

        let _dr = new Driver();
        _dr.setId(route.driverId);
        request.setDriver(_dr);


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




