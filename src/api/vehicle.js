const {Vehicle, VehicleAllResponse, EntityCreateResponse, EntityIdRequest, EntityDeleteResponse} = require('../grpc-generated/Transport_pb');
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
            console.log("Item of getVehiclesList - " + item);
            listVehicles.push(item);
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
        request.setRegistrationnumber(vehicle.registrationnumber);
        request.setModel(vehicle.model);
        request.setTonnage(vehicle.tonnage);
        request.setCapacity(vehicle.capacity);
        // console.log("REQUEST.NAME " + request.getName());
        // console.log("REQUEST.SURNAME  " + request.getSurname());
        // console.log("REQUEST.PATRONYMIC  " + request.getPatronymic());
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