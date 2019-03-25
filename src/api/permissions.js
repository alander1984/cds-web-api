const {Empty, Permission, PermissionAllResponse, EntityCreateResponse, EntityIdRequest, EntityDeleteResponse} = require('../grpc-generated/AuthEntity_pb.js');

const {PermissionReadAllServiceClient} = require('../grpc-generated/AuthEntity_grpc_web_pb.js');
var clientAllPermissions = new PermissionReadAllServiceClient("http://192.168.1.105:34871");

const {PermissionCreateOrUpdateServiceClient} = require('../grpc-generated/AuthEntity_grpc_web_pb.js');
var clientCreatePermission = new PermissionCreateOrUpdateServiceClient("http://192.168.63.14:8040");

const {PermissionReadByIdServiceClient} = require('../grpc-generated/AuthEntity_grpc_web_pb.js');
var clientGetPermission = new PermissionReadByIdServiceClient("http://192.168.63.14:8040");

const {PermissionDeleteByIdServiceClient} = require('../grpc-generated/AuthEntity_grpc_web_pb.js');
var clientDeletePermission = new PermissionDeleteByIdServiceClient("http://192.168.63.14:8040");

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
    createOrUpdatePermission: function (id) {
    	return new Promise((resolve, reject) => {
        	var request = new Permission();
        	request.setId(id);
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
        	clientDeletePermission.deleteByIdPermission(request, {}, (err, response) => {
      			resolve(response);
        	}); 
	   });
    }
  }
};