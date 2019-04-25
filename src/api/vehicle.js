const {Vehicle, Driver, TransportCompany, VehicleAllResponse, EntityCreateResponse, EntityIdRequest, EntityDeleteResponse} = require('../grpc-generated/Transport_pb');
const {Empty} = require('../grpc-generated/common_pb.js');
var Config = require('Config');
const {VehicleServiceClient} = require('../grpc-generated/Transport_grpc_web_pb');
var clientVehicle = new VehicleServiceClient(Config.backendRFPEndpoint);

module.exports = {
  Vehicles: {
    sendAllVehicles: function () {
      return new Promise((resolve, reject) => {
        console.log("In sendAllVehicles function");
        var request = new Empty();
        clientVehicle.readAllVehicles(request, {}, (err, vehicles) => {
          var listVehicles = [];
          var p = vehicles.getVehiclesList();
          p.forEach(function(item, index, p){
            let vehicle = {};
            vehicle.id = item.getId();
            vehicle.registrationNumber = item.getRegistrationnumber();
            vehicle.model = item.getModel();
            vehicle.tonnage = item.getTonnage();
            vehicle.capacity = item.getCapacity();
            vehicle.drivers = [];
            var d = item.getDriversList();
            d.forEach(function(it, i, d){
                 let driver = new Object();
                 driver.id = it.getId();
                 driver.surname = it.getSurname();
                 driver.name = it.getName();
                 driver.patronymic = it.getPatronymic();
                 driver.birthday = it.getBirthday();
                 driver.login = it.getLogin();
                 driver.password = it.getPassword();
                 //driver.vehicles = [];
                 vehicle.drivers.push(driver);
            });
            vehicle.transportCompanies = [];
            var tc = item.getTransportcompaniesList();
            tc.forEach(function(it2, i2, tc){
                let t = new Object();
                t.id = it2.getId();
                t.code = it2.getCode();
                t.name = it2.getName();
                vehicle.transportCompanies.push(t);
            });
            console.log("Item of getVehiclesList - " + item);
            listVehicles.push(vehicle);
          });
          resolve(listVehicles);
        });
      });
    },

    createOrUpdateVehicle: function (vehicle) {
      console.log("In createOrUpdateVehicle function");
      return new Promise((resolve, reject) => {
        var request = new Vehicle();
        if (vehicle.id) request.setId(vehicle.id);
        request.setRegistrationnumber(vehicle.registrationNumber);
        request.setModel(vehicle.model);
        request.setTonnage(vehicle.tonnage);
        request.setCapacity(vehicle.capacity);
        var drivers = [];
        var p = vehicle.drivers;
        p.forEach(function (item, index, p) {
            let driver = new Driver();
            if (item.id) driver.setId(item.id);
            driver.setName(item.name);
            driver.setSurname(item.surname);
            driver.setPatronymic(item.patronymic);
            driver.setLogin(item.login);
            driver.setBirthday(item.birthday);
            driver.setPassword(item.password);
            drivers.push(driver);
        });

        request.setDriversList(drivers);
        
        var transportCompanies = [];
        var tC = vehicle.transportCompanies;
        tC.forEach(function (item, index, tC){
            let t = new TransportCompany();
            if (item.id) t.setId(item.id);
            t.setCode(item.code);
            t.setName(item.name);
            transportCompanies.push(t);
        });
        request.setTransportcompaniesList(transportCompanies);
        // console.log("REQUEST.NAME " + request.getName());
        // console.log("REQUEST.SURNAME  " + request.getSurname());
        // console.log("REQUEST.Drivers  " + JSON.stringify(request.getDriversList()));
        clientVehicle.createOrUpdateVehicle(request, {}, (err, response) => {
          resolve(response);
        });
      });
    },
    sendGetVehicle: function (id) {
      console.log("In sendGetVehicle function");
      return new Promise((resolve, reject) => {
        var request = new EntityIdRequest();
        request.setId(id);
        clientVehicle.readByIdVehicle(request, {}, (err, vehicle) => {
          resolve(vehicle);
        });
      });
    },
    deleteVehicle: function (id) {
      console.log("In deleteVehicle function");
      return new Promise((resolve, reject) => {
        var request = new EntityIdRequest();
        request.setId(id);
        console.log("REQUEST.DELETE.ID  " + request.getId());
        clientVehicle.deleteByIdVehicle(request, {}, (err, response) => {
          resolve(response);
        });
      });
    }
  }
};