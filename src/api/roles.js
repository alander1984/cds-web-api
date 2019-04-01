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
                var _roles = roles.array[0];
                _roles.forEach(function(item, index, _roles){
                    
                    var role = new Object();
                    let id = {id: item[0]};
                    let code = {code: item[1]};
                    let name = {name: item[2]};
                    role.permissions = [];
                    let _permissions = item[3];
                    _permissions.forEach(function(itemp, index, _permissions){
                        let permission = new Object();
                        let id_p = {id: itemp[0]};
                        let code_p = {code: itemp[1]};
                        let name_p = {name: itemp[2]};
                        Object.assign(permission, id_p, code_p, name_p);
                        //console.log("Permission :  " + "id: " + permission.id + "  name: " + permission.name);
                        role.permissions.push(permission);
                        //console.log("PermissionS :  " + role.permissions[index].name);
                    });
                    Object.assign(role, id, code, name);
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