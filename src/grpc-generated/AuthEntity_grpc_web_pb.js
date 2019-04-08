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
proto.tech.lmru.auth.grpc.service.generated.impl.PermissionCreateOrUpdateServiceClient =
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
proto.tech.lmru.auth.grpc.service.generated.impl.PermissionCreateOrUpdateServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.tech.lmru.auth.grpc.service.generated.impl.PermissionCreateOrUpdateServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.tech.lmru.auth.grpc.service.generated.impl.PermissionCreateOrUpdateServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.Permission,
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.EntityCreateResponse>}
 */
const methodInfo_PermissionCreateOrUpdateService_createOrUpdatePermission = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.tech.lmru.auth.grpc.service.generated.impl.PermissionCreateOrUpdateServiceClient.prototype.createOrUpdatePermission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tech.lmru.auth.grpc.service.generated.impl.PermissionCreateOrUpdateService/createOrUpdatePermission',
      request,
      metadata,
      methodInfo_PermissionCreateOrUpdateService_createOrUpdatePermission,
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
proto.tech.lmru.auth.grpc.service.generated.impl.PermissionCreateOrUpdateServicePromiseClient.prototype.createOrUpdatePermission =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createOrUpdatePermission(
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
proto.tech.lmru.auth.grpc.service.generated.impl.PermissionReadByIdServiceClient =
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
proto.tech.lmru.auth.grpc.service.generated.impl.PermissionReadByIdServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.tech.lmru.auth.grpc.service.generated.impl.PermissionReadByIdServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.tech.lmru.auth.grpc.service.generated.impl.PermissionReadByIdServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest,
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.Permission>}
 */
const methodInfo_PermissionReadByIdService_readByIdPermission = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.tech.lmru.auth.grpc.service.generated.impl.PermissionReadByIdServiceClient.prototype.readByIdPermission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tech.lmru.auth.grpc.service.generated.impl.PermissionReadByIdService/readByIdPermission',
      request,
      metadata,
      methodInfo_PermissionReadByIdService_readByIdPermission,
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
proto.tech.lmru.auth.grpc.service.generated.impl.PermissionReadByIdServicePromiseClient.prototype.readByIdPermission =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.readByIdPermission(
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
proto.tech.lmru.auth.grpc.service.generated.impl.PermissionReadAllServiceClient =
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
proto.tech.lmru.auth.grpc.service.generated.impl.PermissionReadAllServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.tech.lmru.auth.grpc.service.generated.impl.PermissionReadAllServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.tech.lmru.auth.grpc.service.generated.impl.PermissionReadAllServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.Empty,
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.PermissionAllResponse>}
 */
const methodInfo_PermissionReadAllService_readAllPermission = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.tech.lmru.auth.grpc.service.generated.impl.PermissionReadAllServiceClient.prototype.readAllPermission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tech.lmru.auth.grpc.service.generated.impl.PermissionReadAllService/readAllPermission',
      request,
      metadata,
      methodInfo_PermissionReadAllService_readAllPermission,
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
proto.tech.lmru.auth.grpc.service.generated.impl.PermissionReadAllServicePromiseClient.prototype.readAllPermission =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.readAllPermission(
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
proto.tech.lmru.auth.grpc.service.generated.impl.PermissionDeleteByIdServiceClient =
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
proto.tech.lmru.auth.grpc.service.generated.impl.PermissionDeleteByIdServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.tech.lmru.auth.grpc.service.generated.impl.PermissionDeleteByIdServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.tech.lmru.auth.grpc.service.generated.impl.PermissionDeleteByIdServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest,
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.EntityDeleteResponse>}
 */
const methodInfo_PermissionDeleteByIdService_deleteByIdPermission = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.tech.lmru.auth.grpc.service.generated.impl.PermissionDeleteByIdServiceClient.prototype.deleteByIdPermission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tech.lmru.auth.grpc.service.generated.impl.PermissionDeleteByIdService/deleteByIdPermission',
      request,
      metadata,
      methodInfo_PermissionDeleteByIdService_deleteByIdPermission,
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
proto.tech.lmru.auth.grpc.service.generated.impl.PermissionDeleteByIdServicePromiseClient.prototype.deleteByIdPermission =
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
proto.tech.lmru.auth.grpc.service.generated.impl.RoleCreateOrUpdateServiceClient =
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
proto.tech.lmru.auth.grpc.service.generated.impl.RoleCreateOrUpdateServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.tech.lmru.auth.grpc.service.generated.impl.RoleCreateOrUpdateServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.tech.lmru.auth.grpc.service.generated.impl.RoleCreateOrUpdateServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.Role,
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.EntityCreateResponse>}
 */
const methodInfo_RoleCreateOrUpdateService_createOrUpdateRole = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.tech.lmru.auth.grpc.service.generated.impl.RoleCreateOrUpdateServiceClient.prototype.createOrUpdateRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tech.lmru.auth.grpc.service.generated.impl.RoleCreateOrUpdateService/createOrUpdateRole',
      request,
      metadata,
      methodInfo_RoleCreateOrUpdateService_createOrUpdateRole,
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
proto.tech.lmru.auth.grpc.service.generated.impl.RoleCreateOrUpdateServicePromiseClient.prototype.createOrUpdateRole =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createOrUpdateRole(
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
proto.tech.lmru.auth.grpc.service.generated.impl.RoleReadByIdServiceClient =
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
proto.tech.lmru.auth.grpc.service.generated.impl.RoleReadByIdServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.tech.lmru.auth.grpc.service.generated.impl.RoleReadByIdServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.tech.lmru.auth.grpc.service.generated.impl.RoleReadByIdServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest,
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.Role>}
 */
const methodInfo_RoleReadByIdService_readByIdRole = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.tech.lmru.auth.grpc.service.generated.impl.RoleReadByIdServiceClient.prototype.readByIdRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tech.lmru.auth.grpc.service.generated.impl.RoleReadByIdService/readByIdRole',
      request,
      metadata,
      methodInfo_RoleReadByIdService_readByIdRole,
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
proto.tech.lmru.auth.grpc.service.generated.impl.RoleReadByIdServicePromiseClient.prototype.readByIdRole =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.readByIdRole(
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
proto.tech.lmru.auth.grpc.service.generated.impl.RoleReadAllServiceClient =
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
proto.tech.lmru.auth.grpc.service.generated.impl.RoleReadAllServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.tech.lmru.auth.grpc.service.generated.impl.RoleReadAllServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.tech.lmru.auth.grpc.service.generated.impl.RoleReadAllServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.Empty,
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.RoleAllResponse>}
 */
const methodInfo_RoleReadAllService_readAllRole = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.tech.lmru.auth.grpc.service.generated.impl.RoleReadAllServiceClient.prototype.readAllRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tech.lmru.auth.grpc.service.generated.impl.RoleReadAllService/readAllRole',
      request,
      metadata,
      methodInfo_RoleReadAllService_readAllRole,
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
proto.tech.lmru.auth.grpc.service.generated.impl.RoleReadAllServicePromiseClient.prototype.readAllRole =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.readAllRole(
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
proto.tech.lmru.auth.grpc.service.generated.impl.RoleDeleteByIdServiceClient =
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
proto.tech.lmru.auth.grpc.service.generated.impl.RoleDeleteByIdServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.tech.lmru.auth.grpc.service.generated.impl.RoleDeleteByIdServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.tech.lmru.auth.grpc.service.generated.impl.RoleDeleteByIdServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest,
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.EntityDeleteResponse>}
 */
const methodInfo_RoleDeleteByIdService_deleteByIdRole = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.tech.lmru.auth.grpc.service.generated.impl.RoleDeleteByIdServiceClient.prototype.deleteByIdRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tech.lmru.auth.grpc.service.generated.impl.RoleDeleteByIdService/deleteByIdRole',
      request,
      metadata,
      methodInfo_RoleDeleteByIdService_deleteByIdRole,
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
proto.tech.lmru.auth.grpc.service.generated.impl.RoleDeleteByIdServicePromiseClient.prototype.deleteByIdRole =
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
proto.tech.lmru.auth.grpc.service.generated.impl.UserCreateOrUpdateServiceClient =
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
proto.tech.lmru.auth.grpc.service.generated.impl.UserCreateOrUpdateServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.tech.lmru.auth.grpc.service.generated.impl.UserCreateOrUpdateServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.tech.lmru.auth.grpc.service.generated.impl.UserCreateOrUpdateServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.User,
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.EntityCreateResponse>}
 */
const methodInfo_UserCreateOrUpdateService_createOrUpdateUser = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.tech.lmru.auth.grpc.service.generated.impl.UserCreateOrUpdateServiceClient.prototype.createOrUpdateUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tech.lmru.auth.grpc.service.generated.impl.UserCreateOrUpdateService/createOrUpdateUser',
      request,
      metadata,
      methodInfo_UserCreateOrUpdateService_createOrUpdateUser,
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
proto.tech.lmru.auth.grpc.service.generated.impl.UserCreateOrUpdateServicePromiseClient.prototype.createOrUpdateUser =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createOrUpdateUser(
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
proto.tech.lmru.auth.grpc.service.generated.impl.UserReadByIdServiceClient =
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
proto.tech.lmru.auth.grpc.service.generated.impl.UserReadByIdServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.tech.lmru.auth.grpc.service.generated.impl.UserReadByIdServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.tech.lmru.auth.grpc.service.generated.impl.UserReadByIdServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest,
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.User>}
 */
const methodInfo_UserReadByIdService_readByIdUser = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.tech.lmru.auth.grpc.service.generated.impl.UserReadByIdServiceClient.prototype.readByIdUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tech.lmru.auth.grpc.service.generated.impl.UserReadByIdService/readByIdUser',
      request,
      metadata,
      methodInfo_UserReadByIdService_readByIdUser,
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
proto.tech.lmru.auth.grpc.service.generated.impl.UserReadByIdServicePromiseClient.prototype.readByIdUser =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.readByIdUser(
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
proto.tech.lmru.auth.grpc.service.generated.impl.UserReadAllServiceClient =
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
proto.tech.lmru.auth.grpc.service.generated.impl.UserReadAllServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.tech.lmru.auth.grpc.service.generated.impl.UserReadAllServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.tech.lmru.auth.grpc.service.generated.impl.UserReadAllServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.Empty,
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.UserAllResponse>}
 */
const methodInfo_UserReadAllService_readAllUser = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.tech.lmru.auth.grpc.service.generated.impl.UserReadAllServiceClient.prototype.readAllUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tech.lmru.auth.grpc.service.generated.impl.UserReadAllService/readAllUser',
      request,
      metadata,
      methodInfo_UserReadAllService_readAllUser,
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
proto.tech.lmru.auth.grpc.service.generated.impl.UserReadAllServicePromiseClient.prototype.readAllUser =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.readAllUser(
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
proto.tech.lmru.auth.grpc.service.generated.impl.UserDeleteByIdServiceClient =
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
proto.tech.lmru.auth.grpc.service.generated.impl.UserDeleteByIdServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.tech.lmru.auth.grpc.service.generated.impl.UserDeleteByIdServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.tech.lmru.auth.grpc.service.generated.impl.UserDeleteByIdServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.EntityIdRequest,
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.EntityDeleteResponse>}
 */
const methodInfo_UserDeleteByIdService_deleteByIdUser = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.tech.lmru.auth.grpc.service.generated.impl.UserDeleteByIdServiceClient.prototype.deleteByIdUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tech.lmru.auth.grpc.service.generated.impl.UserDeleteByIdService/deleteByIdUser',
      request,
      metadata,
      methodInfo_UserDeleteByIdService_deleteByIdUser,
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
proto.tech.lmru.auth.grpc.service.generated.impl.UserDeleteByIdServicePromiseClient.prototype.deleteByIdUser =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteByIdUser(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.tech.lmru.auth.grpc.service.generated.impl;

