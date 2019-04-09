const {Driver, Vehicle, DriverAllResponse, EntityCreateResponse, EntityIdRequest, EntityDeleteResponse} = require('../grpc-generated/Transport_pb');
const {Empty} = require('../grpc-generated/common_pb.js');
var Config = require('Config');
const {DriverServiceClient} = require('../grpc-generated/Transport_grpc_web_pb');
var clientDriver = new DriverServiceClient(Config.backendRFPEndpoint);

module.exports = {
  Drivers: {
    sendAllDrivers: function () {
      return new Promise((resolve, reject) => {
        console.log("In sendAllDrivers function");
        var request = new Empty();
        clientDriver.readAllDrivers(request, {}, (err, drivers) => {
          console.log(err);
          let listDrivers = [];
          let p = drivers.getDriversList();
          p.forEach(function(item, index, p){
             let driver = {};
             driver.id = item.getId();
             driver.surname = item.getSurname();
             driver.name = item.getName();
             driver.patronymic = item.getPatronymic();
             driver.birthday = item.getBirthday();
             driver.login = item.getLogin();
             driver.password = item.getPassword();
             driver.vehicles = [];

             let _vehicles = item.getVehiclesList();
             _vehicles.forEach(function(item, index, _vehicles) {
               let vehicle = {};
               vehicle.id = item.getId();
               vehicle.registrationNumber = item.getRegistrationnumber();
               vehicle.model = item.getModel();
               vehicle.tonnage = item.getTonnage();
               vehicle.capacity = item.getCapacity();
               driver.vehicles.push(vehicle);
             });


            console.log("Item of getDriversList - " + item);
            listDrivers.push(driver);
          });
          resolve(listDrivers);
        });
      });
    },

    createOrUpdateDriver: function (driver) {
      console.log("In createOrUpdateDriver function");
      return new Promise((resolve, reject) => {
        let request = new Driver();
        if (driver.id) request.setId(driver.id);
        request.setName(driver.name);
        request.setSurname(driver.surname);
        request.setPatronymic(driver.patronymic);
        request.setLogin(driver.login);
        request.setPassword(driver.password);
        //TODO change
        request.setBirthday("1990-04-19 00:00");

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
        clientDriver.createOrUpdateDriver(request, {}, (err, response) => {
          resolve(response);
        });
      });
    },
    sendGetDriver: function (id) {
      console.log("In sendGetDriver function");
      return new Promise((resolve, reject) => {
        var request = new EntityIdRequest();
        request.setId(id);
        clientDriver.readByIdDriver(request, {}, (err, driver) => {
          resolve(driver);
        });
      });
    },
    deleteDriver: function (id) {
      console.log("In deleteDriver function");
      return new Promise((resolve, reject) => {
        var request = new EntityIdRequest();
        request.setId(id);
        console.log("REQUEST.DELETE.ID  " + request.getId());
        clientDriver.deleteByIdDriver(request, {}, (err, response) => {
          resolve(response);
        });
      });
    }
  }
};