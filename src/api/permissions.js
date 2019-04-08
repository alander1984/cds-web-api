const {Empty, Permission, PermissionAllResponse, EntityCreateResponse, EntityIdRequest, EntityDeleteResponse} = require('../grpc-generated/AuthEntity_pb.js');
var Config = require('Config');
const {PermissionReadAllServiceClient} = require('../grpc-generated/AuthEntity_grpc_web_pb.js');
var clientAllPermissions = new PermissionReadAllServiceClient(Config.backendAPITestEndpoint);

const {PermissionCreateOrUpdateServiceClient} = require('../grpc-generated/AuthEntity_grpc_web_pb.js');
var clientCreatePermission = new PermissionCreateOrUpdateServiceClient(Config.backendAPITestEndpoint);

const {PermissionReadByIdServiceClient} = require('../grpc-generated/AuthEntity_grpc_web_pb.js');
var clientGetPermission = new PermissionReadByIdServiceClient(Config.backendAPITestEndpoint);

const {PermissionDeleteByIdServiceClient} = require('../grpc-generated/AuthEntity_grpc_web_pb.js');
var clientDeletePermission = new PermissionDeleteByIdServiceClient(Config.backendAPITestEndpoint);

module.exports = {
  Permissions: {
    sendAllPermissions: function () {
    	return new Promise((resolve, reject) => {
        	var request = new Empty();
        	clientAllPermissions.readAllPermission(request, {}, (err, permissions) => {
      			resolve(permissions);
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
        	clientCreatePermission.createOrUpdatePermission(request, {}, (err, response) => {
      			resolve(response);
        	}); 
	   });
    },
    sendGetPermission: function (id) {
    	return new Promise((resolve, reject) => {
        	var request = new EntityIdRequest();
        	request.setId(id);
        	clientGetPermission.readByIdPermission(request, {}, (err, permission) => {
      			resolve(permission);
        	}); 
	   });
    },
    deletePermission: function (id) {
    	return new Promise((resolve, reject) => {
        	var request = new EntityIdRequest();
        	request.setId(id);
        	console.log("REQUEST.DELETE.ID  " + request.getId());
        	clientDeletePermission.deleteByIdPermission(request, {}, (err, response) => {
      			resolve(response);
        	}); 
	   });
    }
  }
};