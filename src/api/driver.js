const {Empty, Driver, DriverAllResponse, EntityCreateResponse, EntityIdRequest, EntityDeleteResponse} = require('../grpc-generated/Transport_pb');
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
          var listDrivers = [];
          var p = drivers.getDriversList();
          p.forEach(function(item, index, p){
            // let permission = new Object();
            // permission.id = item.getId();
            // permission.code = item.getCode();
            // permission.name = item.getName();
            console.log("Item of getDriversList - " + item);
            listDrivers.push(item);
          });
          resolve(listDrivers);
        });
      });
    },

    createOrUpdateDriver: function (driver) {
      console.log("In createOrUpdateDriver function");
      return new Promise((resolve, reject) => {
        var request = new Driver();
        if (driver.id) request.setId(driver.id);
        request.setName(driver.name);
        request.setSurname(driver.surname);
        request.setPatronymic(driver.patronymic);
        request.setLogin(driver.login);
        request.setPassword(driver.password);
        request.setBirthday("1990-04-19 00:00");
        console.log("REQUEST.NAME " + request.getName());
        console.log("REQUEST.SURNAME  " + request.getSurname());
        console.log("REQUEST.PATRONYMIC  " + request.getPatronymic());
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