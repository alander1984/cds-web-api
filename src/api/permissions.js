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
                var _permissions = permissions.array[0];
                _permissions.forEach(function(item, index, _permissions){ 
                    var permission = new Object();
                    let id = {id: item[0]};
                    let code = {code: item[1]};
                    let name = {name: item[2]};
                    Object.assign(permission, id, code, name);
                    console.log("PERMISSION_NAME :  " + permission.name);
                    listPermissions.push(permission);
                }); 
      			resolve(listPermissions);
        	}); 
	   });
    },
    createOrUpdatePermission: function (permission) {
    	return new Promise((resolve, reject) => {
        	var request = new Permission();
        	//request = permission;
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