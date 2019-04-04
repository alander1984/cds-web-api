const {Empty, TransportCompany, TransportCompanyAllResponse, EntityCreateResponse, EntityIdRequest, EntityDeleteResponse} = require('../grpc-generated/Transport_pb');
var Config = require('Config');
const {TransportCompanyServiceClient} = require('../grpc-generated/Transport_grpc_web_pb');
var clientTransportCompany = new TransportCompanyServiceClient(Config.backendRFPEndpoint);

module.exports = {
  TransportCompanies: {
    sendAllTransportCompanies: function () {
      return new Promise((resolve, reject) => {
        console.log("In sendAllTransportCompanies function");
        var request = new Empty();
        clientTransportCompany.readAllTransportCompanies(request, {}, (err, transportCompanies) => {
          var listTransportCompanies = [];
          var p = transportCompanies.getTransportcompaniesList();

          p.forEach(function(item, index, p){
            console.log("Item of getTransportCompaniesList - " + item);
            listTransportCompanies.push(item);
          });
          resolve(listTransportCompanies);
        });
      });
    },

    createOrUpdateTransportCompany: function (transportCompany) {
      console.log("In createOrUpdateDriver function");
      return new Promise((resolve, reject) => {
        var request = new TransportCompany();
        if (transportCompany.id) request.setId(transportCompany.id);
        request.setName(transportCompany.name);
        request.setCode(transportCompany.code);
        // console.log("REQUEST.NAME " + request.getName());
        // console.log("REQUEST.SURNAME  " + request.getSurname());
        // console.log("REQUEST.PATRONYMIC  " + request.getPatronymic());
        clientTransportCompany.createOrUpdateTransportCompany(request, {}, (err, response) => {
          resolve(response);
        });
      });
    },
    sendGetTransportCompany: function (id) {
      console.log("In sendGetTransportCompany function");
      return new Promise((resolve, reject) => {
        var request = new EntityIdRequest();
        request.setId(id);
        clientTransportCompany.readByIdTransportCompany(request, {}, (err, transportCompany) => {
          resolve(transportCompany);
        });
      });
    },
    deleteDriver: function (id) {
      console.log("In deleteTransportCompany function");
      return new Promise((resolve, reject) => {
        var request = new EntityIdRequest();
        request.setId(id);
        console.log("REQUEST.DELETE.ID  " + request.getId());
        clientTransportCompany.deleteByIdTransportCompany(request, {}, (err, response) => {
          resolve(response);
        });
      });
    }
  }
};