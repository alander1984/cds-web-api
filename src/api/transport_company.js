const {TransportCompany, Vehicle, TransportCompanyAllResponse, EntityCreateResponse, EntityIdRequest, EntityDeleteResponse} = require(
    '../grpc-generated/Transport_pb');
const {Empty} = require('../grpc-generated/common_pb.js');
var Config = require('Config');
const {TransportCompanyServiceClient} = require(
    '../grpc-generated/Transport_grpc_web_pb');
var clientTransportCompany = new TransportCompanyServiceClient(
    Config.backendRFPEndpoint);

module.exports = {
  TransportCompanies: {
    sendAllTransportCompanies: function () {
      return new Promise((resolve, reject) => {
        console.log("In sendAllTransportCompanies function");
        var request = new Empty();
        clientTransportCompany.readAllTransportCompanies(request, {},
            (err, transportCompanies) => {
              var listTransportCompanies = [];
              var p = transportCompanies.getTransportcompaniesList();
              p.forEach(function (item, index, p) {
                let tc = new Object();
                tc.id = item.getId();
                tc.code = item.getCode();
                tc.name = item.getName();
                tc.vehicles = [];
                let _vehicles = item.getVehiclesList();
                _vehicles.forEach(function (item, index, _vehicles) {
                  let vehicle = new Object();
                  vehicle.id = item.getId();
                  vehicle.registrationNumber = item.getRegistrationnumber();
                  vehicle.model = item.getModel();
                  vehicle.tonnage = item.getTonnage();
                  vehicle.capacity = item.getCapacity();
                  tc.vehicles.push(vehicle);
                });

                console.log("Item of getTransportCompaniesList - " + item);
                listTransportCompanies.push(tc);
              });
              resolve(listTransportCompanies);
            });
      });
    },

    createOrUpdateTransportCompany: function (transportCompany) {
      console.log("In createOrUpdateTransportCompany function");
      return new Promise((resolve, reject) => {
        var request = new TransportCompany();
        if (transportCompany.id) {
          request.setId(transportCompany.id);
        }
        request.setName(transportCompany.name);
        request.setCode(transportCompany.code);

        var tcVehicles = [];
        var p = transportCompany.vehicles;
        p.forEach(function (item, index, p) {
          let vehicle = new Vehicle();
          vehicle.setId(item.id);
          vehicle.setRegistrationnumber(item.registrationNumber);
          vehicle.setModel(item.model);
          vehicle.setTonnage(item.tonnage);
          vehicle.setCapacity(item.capacity);
          console.log("Vehicle :" + vehicle.id + ", " + vehicle.model + ", "
              + vehicle.registrationNumber);
          tcVehicles.push(vehicle);
        });

        request.setVehiclesList(tcVehicles);
        clientTransportCompany.createOrUpdateTransportCompany(request, {},
            (err, response) => {
              resolve(response);
            });
      });
    },
    sendGetTransportCompany: function (id) {
      console.log("In sendGetTransportCompany function");
      return new Promise((resolve, reject) => {
        var request = new EntityIdRequest();
        request.setId(id);
        clientTransportCompany.readByIdTransportCompany(request, {},
            (err, transportCompany) => {
              resolve(transportCompany);
            });
      });
    },
    deleteTransportCompany: function (id) {
      console.log("In deleteTransportCompany function");
      return new Promise((resolve, reject) => {
        var request = new EntityIdRequest();
        request.setId(id);
        console.log("REQUEST.DELETE.ID  " + request.getId());
        clientTransportCompany.deleteByIdTransportCompany(request, {},
            (err, response) => {
              resolve(response);
            });
      });
    }
  }
};