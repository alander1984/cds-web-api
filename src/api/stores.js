const {Empty, Store, StoreCreateResponse, StoreDeleteResponse, StoreGetAllResponse, StoreIdRequest} = require('../grpc-generated/stores_pb.js');
var Config = require('Config');


const {StoreServiceClient} = require('../grpc-generated/stores_grpc_web_pb.js');
var client = new StoreServiceClient(Config.backendAPITestEndpoint);


module.exports = {
  Stores: {
    createOrUpdateStore: function (store) {
    	return new Promise((resolve, reject) => {
        	var request = new Store();
        	if (store.id) request.setId(store.id);
        	request.setType(store.type);
        	request.setName(store.name);
        	request.setAddress(store.address);
        	request.setCode(store.code);
        	request.setLon(store.lon);
        	request.setLat(store.lat);
        	request.setComment(store.comment);
        	
        	console.log("REQUEST.ID  " + request.getId());
        	console.log("REQUEST.TYPE  " + request.getType());
        	console.log("REQUEST.NAME  " + request.getName());
        	console.log("REQUEST.ADDRESS  " + request.getAddress());
        	console.log("REQUEST.CODE  " + request.getCode());
        	console.log("REQUEST.LON  " + request.getLon());
        	console.log("REQUEST.LAT  " + request.getLat());
        	console.log("REQUEST.COMMENT  " + request.getComment());
        	client.createOrUpdateStore(request, {}, (err, response) => {
      			resolve(response);
        	}); 
	   });
    },
    getByIdStore: function (id) {
    	return new Promise((resolve, reject) => {
        	var request = new StoreIdRequest();
        	request.setId(id);
        	client.getByIdStore(request, {}, (err, store) => {
      			resolve(store);
        	}); 
	   });
    }, 
    getAllStore: function() {
        return new Promise((resolve, reject) => {
        	var request = new Empty();
        	
        	client.getAllStore(request, {}, (err, stores) => {
        	    var storesList = [];
        	    var protoStores = stores.getStoresList();
        	    protoStores.forEach(function(item, index, protoStores){
        	       let store = new Object();
        	       store.id = item.getId();
        	       store.type = item.getType();
                   store.name = item.getName();
                   store.address = item.getAddress();
                   store.code = item.getCode();
                   store.lon = item.getLon();
                   store.lat = item.getLat();
                   store.comment = item.getComment();
                   storesList.push(store);
    	       });
    	       
      			resolve(storesList);
        	}); 
	   });
    },
    deleteStoreById: function(id) {
        return new Promise((resolve, reject) => {
        	var request = new StoreIdRequest();
        	request.setId(id);
        	console.log("REQUEST.DELETE.ID  " + request.getId());
        	client.deleteStoreById(request, {}, (err, response) => {
      			resolve(response);
        	}); 
	   });
    }

}

};

