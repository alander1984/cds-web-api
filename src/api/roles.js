const {Empty, Role, RoleAllResponse, EntityCreateResponse, EntityIdRequest, EntityDeleteResponse} = require('../grpc-generated/AuthEntity_pb.js');
var Config = require('Config');
const {RoleReadAllServiceClient} = require('../grpc-generated/AuthEntity_grpc_web_pb.js');
var clientAllRoles = new RoleReadAllServiceClient(Config.backendAPITestEndpoint);

const {RoleCreateOrUpdateServiceClient} = require('../grpc-generated/AuthEntity_grpc_web_pb.js');
var clientCreateRole = new RoleCreateOrUpdateServiceClient(Config.backendAPITestEndpoint);

const {RoleReadByIdServiceClient} = require('../grpc-generated/AuthEntity_grpc_web_pb.js');
var clientGetRole = new RoleReadByIdServiceClient(Config.backendAPITestEndpoint);

const {RoleDeleteByIdServiceClient} = require('../grpc-generated/AuthEntity_grpc_web_pb.js');
var clientDeleteRole = new RoleDeleteByIdServiceClient(Config.backendAPITestEndpoint);

module.exports = {
  Roles: {
    sendAllRoles: function () {
    	return new Promise((resolve, reject) => {
        	var request = new Empty();
        	clientAllRoles.readAllRole(request, {}, (err, roles) => {
        	    /*
        	    var s = permissions.toString().split(',');
        	    var listPermissions = [];
                console.log("PERMISSION:  " + s);
             
                 for(var i=0; i < s.length; i += 3){
                     var permission = new Object();
                     permission.id = s[i];
                     permission.code = s[i+1];
                     permission.name = s[i+2];
                     listPermissions.push(permission);
                 }
            
      			resolve(listPermissions);*/
      			console.log("ROLES IN CDS-WEB:  " + roles);
      			resolve(roles);
        	}); 
	   });
    },
    createOrUpdateRole: function (role) {
    	return new Promise((resolve, reject) => {
        	var request = new Role();
        	//request = permission;
        	if (role.id) request.setId(role.id);
        	request.setCode(role.code);
        	request.setName(role.name);
        	console.log("REQUEST.ID  " + request.getId());
        	console.log("REQUEST.CODE  " + request.getCode());
        	console.log("REQUEST.NAME  " + request.getName());
        	clientCreateRole.createOrUpdateRole(request, {}, (err, response) => {
      			resolve(response);
        	}); 
	   });
    },
    sendGetRole: function (id) {
    	return new Promise((resolve, reject) => {
        	var request = new EntityIdRequest();
        	request.setId(id);
        	clientGetRole.readByIdRole(request, {}, (err, role) => {
      			resolve(role);
        	}); 
	   });
    },
    deleteRole: function (id) {
    	return new Promise((resolve, reject) => {
        	var request = new EntityIdRequest();
        	request.setId(id);
        	console.log("REQUEST.DELETE.ID  " + request.getId());
        	clientDeleteRole.deleteByIdRole(request, {}, (err, response) => {
      			resolve(response);
        	}); 
	   });
    }
  }
};