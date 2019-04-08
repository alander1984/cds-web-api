const {Empty, Role, Permission, RoleAllResponse, EntityCreateResponse, EntityIdRequest, EntityDeleteResponse} = require('../grpc-generated/AuthEntity_pb.js');
var Config = require('Config');
const {RoleServiceClient} = require('../grpc-generated/AuthEntity_grpc_web_pb.js');
var clientRole = new RoleServiceClient(Config.backendAPITestEndpoint);

module.exports = {
  Roles: {
    sendAllRoles: function () {
    	return new Promise((resolve, reject) => {
        	var request = new Empty();
        	clientRole.readAllRole(request, {}, (err, roles) => {
        	    var listRoles = [];
        	    var r = roles.getRolesList();
        	    r.forEach(function(item, index, r){
        	        var role = new Object();
                    role.id = item.getId();
                    role.code = item.getCode();
                    role.name = item.getName();
                    role.permissions = [];
                    
                    let _permissions = item.getPermissionsList();
                    _permissions.forEach(function(itemp, index, _permissions){
                        let permission = new Object();
                        permission.id = itemp.getId();
                        permission.code = itemp.getCode();
                        permission.name = itemp.getName();
                        //console.log("Permission :  " + "id: " + permission.id + "  name: " + permission.name);
                        role.permissions.push(permission);
                    });
                    listRoles.push(role);
        	    });
      			resolve(listRoles);
        	}); 
	   });
    },
    createOrUpdateRole: function (role) {
    	return new Promise((resolve, reject) => {
        	var request = new Role();
        	if (role.id) request.setId(role.id);
        	request.setCode(role.code);
        	request.setName(role.name);
        	//console.log("REQUEST.ID  " + request.getId());
        	//console.log("REQUEST.CODE  " + request.getCode());
        	//console.log("REQUEST.NAME  " + request.getName());
        	var m = [];
        	var p = role.permissions;
        	
        	p.forEach(function(item, inndex, p){
        	    let permission = new Permission();
        	    permission.setId(item.id);
        	    permission.setCode(item.code);
        	    permission.setName(item.name);
        	    m.push(permission);
        	});
        	
        	request.setPermissionsList(m);
        	clientRole.createOrUpdateRole(request, {}, (err, response) => {
      			resolve(response);
        	}); 
	   });
    },
    sendGetRole: function (id) {
    	return new Promise((resolve, reject) => {
        	var request = new EntityIdRequest();
        	request.setId(id);
        	clientRole.readByIdRole(request, {}, (err, role) => {
      			resolve(role);
        	}); 
	   });
    },
    deleteRole: function (id) {
    	return new Promise((resolve, reject) => {
        	var request = new EntityIdRequest();
        	request.setId(id);
        	console.log("REQUEST.DELETE.ID  " + request.getId());
        	clientRole.deleteByIdRole(request, {}, (err, response) => {
      			resolve(response);
        	}); 
	   });
    }
  }
};