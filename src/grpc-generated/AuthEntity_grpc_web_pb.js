/**
 * @fileoverview gRPC-Web generated client stub for tech.lmru.auth.grpc.service.generated.impl
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.tech = {};
proto.tech.lmru = {};
proto.tech.lmru.auth = {};
proto.tech.lmru.auth.grpc = {};
proto.tech.lmru.auth.grpc.service = {};
proto.tech.lmru.auth.grpc.service.generated = {};
proto.tech.lmru.auth.grpc.service.generated.impl = require('./AuthEntity_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.tech.lmru.auth.grpc.service.generated.impl.PermissionServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.tech.lmru.auth.grpc.service.generated.impl.PermissionServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.tech.lmru.auth.grpc.service.generated.impl.PermissionServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.tech.lmru.auth.grpc.service.generated.impl.PermissionServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.Permission,
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.EntityCreateResponse>}
 */
const methodInfo_PermissionService_createOrUpdatePermission = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tech.lmru.auth.grpc.service.generated.impl.EntityCreateResponse,
  /** @param {!proto.tech.lmru.auth.grpc.service.generated.impl.Permission} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.tech.lmru.auth.grpc.service.generated.impl.EntityCreateResponse.deserializeBinary
);


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.Permission} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tech.lmru.auth.grpc.service.generated.impl.EntityCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tech.lmru.auth.grpc.service.generated.impl.EntityCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.PermissionServiceClient.prototype.createOrUpdatePermission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tech.lmru.auth.grpc.service.generated.impl.PermissionService/createOrUpdatePermission',
      request,
      metadata,
      methodInfo_PermissionService_createOrUpdatePermission,
      callback);
};


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.Permission} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tech.lmru.auth.grpc.service.generated.impl.EntityCreateResponse>}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.PermissionServicePromiseClient.prototype.createOrUpdatePermission =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createOrUpdatePermission(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest,
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.Permission>}
 */
const methodInfo_PermissionService_readByIdPermission = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tech.lmru.auth.grpc.service.generated.impl.Permission,
  /** @param {!proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.tech.lmru.auth.grpc.service.generated.impl.Permission.deserializeBinary
);


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tech.lmru.auth.grpc.service.generated.impl.Permission)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tech.lmru.auth.grpc.service.generated.impl.Permission>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.PermissionServiceClient.prototype.readByIdPermission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tech.lmru.auth.grpc.service.generated.impl.PermissionService/readByIdPermission',
      request,
      metadata,
      methodInfo_PermissionService_readByIdPermission,
      callback);
};


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tech.lmru.auth.grpc.service.generated.impl.Permission>}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.PermissionServicePromiseClient.prototype.readByIdPermission =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.readByIdPermission(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.Empty,
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.PermissionAllResponse>}
 */
const methodInfo_PermissionService_readAllPermission = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tech.lmru.auth.grpc.service.generated.impl.PermissionAllResponse,
  /** @param {!proto.tech.lmru.auth.grpc.service.generated.impl.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.tech.lmru.auth.grpc.service.generated.impl.PermissionAllResponse.deserializeBinary
);


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tech.lmru.auth.grpc.service.generated.impl.PermissionAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tech.lmru.auth.grpc.service.generated.impl.PermissionAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.PermissionServiceClient.prototype.readAllPermission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tech.lmru.auth.grpc.service.generated.impl.PermissionService/readAllPermission',
      request,
      metadata,
      methodInfo_PermissionService_readAllPermission,
      callback);
};


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tech.lmru.auth.grpc.service.generated.impl.PermissionAllResponse>}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.PermissionServicePromiseClient.prototype.readAllPermission =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.readAllPermission(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest,
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.EntityDeleteResponse>}
 */
const methodInfo_PermissionService_deleteByIdPermission = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tech.lmru.auth.grpc.service.generated.impl.EntityDeleteResponse,
  /** @param {!proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.tech.lmru.auth.grpc.service.generated.impl.EntityDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tech.lmru.auth.grpc.service.generated.impl.EntityDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tech.lmru.auth.grpc.service.generated.impl.EntityDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.PermissionServiceClient.prototype.deleteByIdPermission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tech.lmru.auth.grpc.service.generated.impl.PermissionService/deleteByIdPermission',
      request,
      metadata,
      methodInfo_PermissionService_deleteByIdPermission,
      callback);
};


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tech.lmru.auth.grpc.service.generated.impl.EntityDeleteResponse>}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.PermissionServicePromiseClient.prototype.deleteByIdPermission =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteByIdPermission(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.tech.lmru.auth.grpc.service.generated.impl.RoleServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.tech.lmru.auth.grpc.service.generated.impl.RoleServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.tech.lmru.auth.grpc.service.generated.impl.RoleServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.tech.lmru.auth.grpc.service.generated.impl.RoleServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.Role,
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.EntityCreateResponse>}
 */
const methodInfo_RoleService_createOrUpdateRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tech.lmru.auth.grpc.service.generated.impl.EntityCreateResponse,
  /** @param {!proto.tech.lmru.auth.grpc.service.generated.impl.Role} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.tech.lmru.auth.grpc.service.generated.impl.EntityCreateResponse.deserializeBinary
);


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.Role} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tech.lmru.auth.grpc.service.generated.impl.EntityCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tech.lmru.auth.grpc.service.generated.impl.EntityCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.RoleServiceClient.prototype.createOrUpdateRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tech.lmru.auth.grpc.service.generated.impl.RoleService/createOrUpdateRole',
      request,
      metadata,
      methodInfo_RoleService_createOrUpdateRole,
      callback);
};


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.Role} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tech.lmru.auth.grpc.service.generated.impl.EntityCreateResponse>}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.RoleServicePromiseClient.prototype.createOrUpdateRole =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createOrUpdateRole(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest,
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.Role>}
 */
const methodInfo_RoleService_readByIdRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tech.lmru.auth.grpc.service.generated.impl.Role,
  /** @param {!proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.tech.lmru.auth.grpc.service.generated.impl.Role.deserializeBinary
);


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tech.lmru.auth.grpc.service.generated.impl.Role)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tech.lmru.auth.grpc.service.generated.impl.Role>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.RoleServiceClient.prototype.readByIdRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tech.lmru.auth.grpc.service.generated.impl.RoleService/readByIdRole',
      request,
      metadata,
      methodInfo_RoleService_readByIdRole,
      callback);
};


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tech.lmru.auth.grpc.service.generated.impl.Role>}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.RoleServicePromiseClient.prototype.readByIdRole =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.readByIdRole(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.Empty,
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.RoleAllResponse>}
 */
const methodInfo_RoleService_readAllRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tech.lmru.auth.grpc.service.generated.impl.RoleAllResponse,
  /** @param {!proto.tech.lmru.auth.grpc.service.generated.impl.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.tech.lmru.auth.grpc.service.generated.impl.RoleAllResponse.deserializeBinary
);


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tech.lmru.auth.grpc.service.generated.impl.RoleAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tech.lmru.auth.grpc.service.generated.impl.RoleAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.RoleServiceClient.prototype.readAllRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tech.lmru.auth.grpc.service.generated.impl.RoleService/readAllRole',
      request,
      metadata,
      methodInfo_RoleService_readAllRole,
      callback);
};


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tech.lmru.auth.grpc.service.generated.impl.RoleAllResponse>}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.RoleServicePromiseClient.prototype.readAllRole =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.readAllRole(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest,
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.EntityDeleteResponse>}
 */
const methodInfo_RoleService_deleteByIdRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tech.lmru.auth.grpc.service.generated.impl.EntityDeleteResponse,
  /** @param {!proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.tech.lmru.auth.grpc.service.generated.impl.EntityDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tech.lmru.auth.grpc.service.generated.impl.EntityDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tech.lmru.auth.grpc.service.generated.impl.EntityDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.RoleServiceClient.prototype.deleteByIdRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tech.lmru.auth.grpc.service.generated.impl.RoleService/deleteByIdRole',
      request,
      metadata,
      methodInfo_RoleService_deleteByIdRole,
      callback);
};


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tech.lmru.auth.grpc.service.generated.impl.EntityDeleteResponse>}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.RoleServicePromiseClient.prototype.deleteByIdRole =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteByIdRole(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.tech.lmru.auth.grpc.service.generated.impl.UserServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.tech.lmru.auth.grpc.service.generated.impl.UserServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.tech.lmru.auth.grpc.service.generated.impl.UserServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.tech.lmru.auth.grpc.service.generated.impl.UserServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.User,
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.EntityCreateResponse>}
 */
const methodInfo_UserService_createOrUpdateUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tech.lmru.auth.grpc.service.generated.impl.EntityCreateResponse,
  /** @param {!proto.tech.lmru.auth.grpc.service.generated.impl.User} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.tech.lmru.auth.grpc.service.generated.impl.EntityCreateResponse.deserializeBinary
);


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.User} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tech.lmru.auth.grpc.service.generated.impl.EntityCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tech.lmru.auth.grpc.service.generated.impl.EntityCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.UserServiceClient.prototype.createOrUpdateUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tech.lmru.auth.grpc.service.generated.impl.UserService/createOrUpdateUser',
      request,
      metadata,
      methodInfo_UserService_createOrUpdateUser,
      callback);
};


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.User} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tech.lmru.auth.grpc.service.generated.impl.EntityCreateResponse>}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.UserServicePromiseClient.prototype.createOrUpdateUser =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createOrUpdateUser(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest,
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.User>}
 */
const methodInfo_UserService_readByIdUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tech.lmru.auth.grpc.service.generated.impl.User,
  /** @param {!proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.tech.lmru.auth.grpc.service.generated.impl.User.deserializeBinary
);


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tech.lmru.auth.grpc.service.generated.impl.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tech.lmru.auth.grpc.service.generated.impl.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.UserServiceClient.prototype.readByIdUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tech.lmru.auth.grpc.service.generated.impl.UserService/readByIdUser',
      request,
      metadata,
      methodInfo_UserService_readByIdUser,
      callback);
};


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tech.lmru.auth.grpc.service.generated.impl.User>}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.UserServicePromiseClient.prototype.readByIdUser =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.readByIdUser(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.Empty,
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.UserAllResponse>}
 */
const methodInfo_UserService_readAllUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tech.lmru.auth.grpc.service.generated.impl.UserAllResponse,
  /** @param {!proto.tech.lmru.auth.grpc.service.generated.impl.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.tech.lmru.auth.grpc.service.generated.impl.UserAllResponse.deserializeBinary
);


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tech.lmru.auth.grpc.service.generated.impl.UserAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tech.lmru.auth.grpc.service.generated.impl.UserAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.UserServiceClient.prototype.readAllUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tech.lmru.auth.grpc.service.generated.impl.UserService/readAllUser',
      request,
      metadata,
      methodInfo_UserService_readAllUser,
      callback);
};


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tech.lmru.auth.grpc.service.generated.impl.UserAllResponse>}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.UserServicePromiseClient.prototype.readAllUser =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.readAllUser(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest,
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.EntityDeleteResponse>}
 */
const methodInfo_UserService_deleteByIdUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tech.lmru.auth.grpc.service.generated.impl.EntityDeleteResponse,
  /** @param {!proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.tech.lmru.auth.grpc.service.generated.impl.EntityDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tech.lmru.auth.grpc.service.generated.impl.EntityDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tech.lmru.auth.grpc.service.generated.impl.EntityDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.UserServiceClient.prototype.deleteByIdUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tech.lmru.auth.grpc.service.generated.impl.UserService/deleteByIdUser',
      request,
      metadata,
      methodInfo_UserService_deleteByIdUser,
      callback);
};


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tech.lmru.auth.grpc.service.generated.impl.EntityDeleteResponse>}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.UserServicePromiseClient.prototype.deleteByIdUser =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteByIdUser(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.tech.lmru.auth.grpc.service.generated.impl;

