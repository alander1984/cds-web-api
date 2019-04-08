const {Empty, Permission, PermissionAllResponse, EntityCreateResponse, EntityIdRequest, EntityDeleteResponse} = require('../grpc-generated/AuthEntity_pb.js');
var Config = require('Config');
const {PermissionServiceClient} = require('../grpc-generated/AuthEntity_grpc_web_pb.js');
var clientPermission = new PermissionServiceClient(Config.backendAPITestEndpoint);

module.exports = {
  Permissions: {
    sendAllPermissions: function () {
    	return new Promise((resolve, reject) => {
        	var request = new Empty();
        	clientPermission.readAllPermission(request, {}, (err, permissions) => {
        	    var listPermissions = [];
        	    var p = permissions.getPermissionsList();
        	    p.forEach(function(item, index, p){
        	        let permission = new Object();
                    permission.id = item.getId();
                    permission.code = item.getCode();
                    permission.name = item.getName();
                    //console.log("PERMISSION_ID :  " + permission.id + "  NAME :  " + permission.name + "  CODE :  " + permission.code);
                    listPermissions.push(permission);
        	    });
      			resolve(listPermissions);
        	}); 
	   });
    },
    createOrUpdatePermission: function (permission) {
    	return new Promise((resolve, reject) => {
        	var request = new Permission();
        	if (permission.id) request.setId(permission.id);
        	request.setCode(permission.code);
        	request.setName(permission.name);
        	console.log("REQUEST.ID  " + request.getId());
        	console.log("REQUEST.CODE  " + request.getCode());
        	console.log("REQUEST.NAME  " + request.getName());
        	clientPermission.createOrUpdatePermission(request, {}, (err, response) => {
      			resolve(response);
        	}); 
	   });
    },
    sendGetPermission: function (id) {
    	return new Promise((resolve, reject) => {
        	var request = new EntityIdRequest();
        	request.setId(id);
        	clientPermission.readByIdPermission(request, {}, (err, permission) => {
      			resolve(permission);
        	}); 
	   });
    },
    deletePermission: function (id) {
    	return new Promise((resolve, reject) => {
        	var request = new EntityIdRequest();
        	request.setId(id);
        	console.log("REQUEST.DELETE.ID  " + request.getId());
        	clientPermission.deleteByIdPermission(request, {}, (err, response) => {
      			resolve(response);
        	}); 
	   });
    }
  }
};