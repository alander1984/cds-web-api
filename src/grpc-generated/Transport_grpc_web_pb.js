/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var common_pb = require('./common_pb.js')
const proto = require('./Transport_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.DriverServiceClient =
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
proto.DriverServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.DriverServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.DriverServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Driver,
 *   !proto.EntityCreateResponse>}
 */
const methodInfo_DriverService_createOrUpdateDriver = new grpc.web.AbstractClientBase.MethodInfo(
  proto.EntityCreateResponse,
  /** @param {!proto.Driver} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.EntityCreateResponse.deserializeBinary
);


/**
 * @param {!proto.Driver} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.EntityCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.EntityCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DriverServiceClient.prototype.createOrUpdateDriver =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DriverService/createOrUpdateDriver',
      request,
      metadata,
      methodInfo_DriverService_createOrUpdateDriver,
      callback);
};


/**
 * @param {!proto.Driver} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.EntityCreateResponse>}
 *     The XHR Node Readable Stream
 */
proto.DriverServicePromiseClient.prototype.createOrUpdateDriver =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createOrUpdateDriver(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.EntityIdRequest,
 *   !proto.Driver>}
 */
const methodInfo_DriverService_readByIdDriver = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Driver,
  /** @param {!proto.EntityIdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.Driver.deserializeBinary
);


/**
 * @param {!proto.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Driver)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Driver>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DriverServiceClient.prototype.readByIdDriver =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DriverService/readByIdDriver',
      request,
      metadata,
      methodInfo_DriverService_readByIdDriver,
      callback);
};


/**
 * @param {!proto.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Driver>}
 *     The XHR Node Readable Stream
 */
proto.DriverServicePromiseClient.prototype.readByIdDriver =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.readByIdDriver(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Empty,
 *   !proto.DriverAllResponse>}
 */
const methodInfo_DriverService_readAllDrivers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.DriverAllResponse,
  /** @param {!proto.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.DriverAllResponse.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.DriverAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.DriverAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DriverServiceClient.prototype.readAllDrivers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DriverService/readAllDrivers',
      request,
      metadata,
      methodInfo_DriverService_readAllDrivers,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.DriverAllResponse>}
 *     The XHR Node Readable Stream
 */
proto.DriverServicePromiseClient.prototype.readAllDrivers =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.readAllDrivers(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.EntityIdRequest,
 *   !proto.EntityDeleteResponse>}
 */
const methodInfo_DriverService_deleteByIdDriver = new grpc.web.AbstractClientBase.MethodInfo(
  proto.EntityDeleteResponse,
  /** @param {!proto.EntityIdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.EntityDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.EntityDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.EntityDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DriverServiceClient.prototype.deleteByIdDriver =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DriverService/deleteByIdDriver',
      request,
      metadata,
      methodInfo_DriverService_deleteByIdDriver,
      callback);
};


/**
 * @param {!proto.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.EntityDeleteResponse>}
 *     The XHR Node Readable Stream
 */
proto.DriverServicePromiseClient.prototype.deleteByIdDriver =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteByIdDriver(
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
proto.VehicleServiceClient =
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
proto.VehicleServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.VehicleServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.VehicleServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Vehicle,
 *   !proto.EntityCreateResponse>}
 */
const methodInfo_VehicleService_createOrUpdateVehicle = new grpc.web.AbstractClientBase.MethodInfo(
  proto.EntityCreateResponse,
  /** @param {!proto.Vehicle} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.EntityCreateResponse.deserializeBinary
);


/**
 * @param {!proto.Vehicle} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.EntityCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.EntityCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.VehicleServiceClient.prototype.createOrUpdateVehicle =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/VehicleService/createOrUpdateVehicle',
      request,
      metadata,
      methodInfo_VehicleService_createOrUpdateVehicle,
      callback);
};


/**
 * @param {!proto.Vehicle} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.EntityCreateResponse>}
 *     The XHR Node Readable Stream
 */
proto.VehicleServicePromiseClient.prototype.createOrUpdateVehicle =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createOrUpdateVehicle(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.EntityIdRequest,
 *   !proto.Vehicle>}
 */
const methodInfo_VehicleService_readByIdVehicle = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Vehicle,
  /** @param {!proto.EntityIdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.Vehicle.deserializeBinary
);


/**
 * @param {!proto.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Vehicle)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Vehicle>|undefined}
 *     The XHR Node Readable Stream
 */
proto.VehicleServiceClient.prototype.readByIdVehicle =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/VehicleService/readByIdVehicle',
      request,
      metadata,
      methodInfo_VehicleService_readByIdVehicle,
      callback);
};


/**
 * @param {!proto.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Vehicle>}
 *     The XHR Node Readable Stream
 */
proto.VehicleServicePromiseClient.prototype.readByIdVehicle =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.readByIdVehicle(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Empty,
 *   !proto.VehicleAllResponse>}
 */
const methodInfo_VehicleService_readAllVehicles = new grpc.web.AbstractClientBase.MethodInfo(
  proto.VehicleAllResponse,
  /** @param {!proto.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.VehicleAllResponse.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.VehicleAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.VehicleAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.VehicleServiceClient.prototype.readAllVehicles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/VehicleService/readAllVehicles',
      request,
      metadata,
      methodInfo_VehicleService_readAllVehicles,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.VehicleAllResponse>}
 *     The XHR Node Readable Stream
 */
proto.VehicleServicePromiseClient.prototype.readAllVehicles =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.readAllVehicles(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.EntityIdRequest,
 *   !proto.EntityDeleteResponse>}
 */
const methodInfo_VehicleService_deleteByIdVehicle = new grpc.web.AbstractClientBase.MethodInfo(
  proto.EntityDeleteResponse,
  /** @param {!proto.EntityIdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.EntityDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.EntityDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.EntityDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.VehicleServiceClient.prototype.deleteByIdVehicle =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/VehicleService/deleteByIdVehicle',
      request,
      metadata,
      methodInfo_VehicleService_deleteByIdVehicle,
      callback);
};


/**
 * @param {!proto.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.EntityDeleteResponse>}
 *     The XHR Node Readable Stream
 */
proto.VehicleServicePromiseClient.prototype.deleteByIdVehicle =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteByIdVehicle(
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
proto.TransportCompanyServiceClient =
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
proto.TransportCompanyServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.TransportCompanyServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.TransportCompanyServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.TransportCompany,
 *   !proto.EntityCreateResponse>}
 */
const methodInfo_TransportCompanyService_createOrUpdateTransportCompany = new grpc.web.AbstractClientBase.MethodInfo(
  proto.EntityCreateResponse,
  /** @param {!proto.TransportCompany} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.EntityCreateResponse.deserializeBinary
);


/**
 * @param {!proto.TransportCompany} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.EntityCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.EntityCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TransportCompanyServiceClient.prototype.createOrUpdateTransportCompany =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TransportCompanyService/createOrUpdateTransportCompany',
      request,
      metadata,
      methodInfo_TransportCompanyService_createOrUpdateTransportCompany,
      callback);
};


/**
 * @param {!proto.TransportCompany} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.EntityCreateResponse>}
 *     The XHR Node Readable Stream
 */
proto.TransportCompanyServicePromiseClient.prototype.createOrUpdateTransportCompany =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createOrUpdateTransportCompany(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.EntityIdRequest,
 *   !proto.TransportCompany>}
 */
const methodInfo_TransportCompanyService_readByIdTransportCompany = new grpc.web.AbstractClientBase.MethodInfo(
  proto.TransportCompany,
  /** @param {!proto.EntityIdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.TransportCompany.deserializeBinary
);


/**
 * @param {!proto.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.TransportCompany)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TransportCompany>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TransportCompanyServiceClient.prototype.readByIdTransportCompany =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TransportCompanyService/readByIdTransportCompany',
      request,
      metadata,
      methodInfo_TransportCompanyService_readByIdTransportCompany,
      callback);
};


/**
 * @param {!proto.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TransportCompany>}
 *     The XHR Node Readable Stream
 */
proto.TransportCompanyServicePromiseClient.prototype.readByIdTransportCompany =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.readByIdTransportCompany(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Empty,
 *   !proto.TransportCompanyAllResponse>}
 */
const methodInfo_TransportCompanyService_readAllTransportCompanies = new grpc.web.AbstractClientBase.MethodInfo(
  proto.TransportCompanyAllResponse,
  /** @param {!proto.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.TransportCompanyAllResponse.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.TransportCompanyAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TransportCompanyAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TransportCompanyServiceClient.prototype.readAllTransportCompanies =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TransportCompanyService/readAllTransportCompanies',
      request,
      metadata,
      methodInfo_TransportCompanyService_readAllTransportCompanies,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TransportCompanyAllResponse>}
 *     The XHR Node Readable Stream
 */
proto.TransportCompanyServicePromiseClient.prototype.readAllTransportCompanies =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.readAllTransportCompanies(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.EntityIdRequest,
 *   !proto.EntityDeleteResponse>}
 */
const methodInfo_TransportCompanyService_deleteByIdTransportCompany = new grpc.web.AbstractClientBase.MethodInfo(
  proto.EntityDeleteResponse,
  /** @param {!proto.EntityIdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.EntityDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.EntityDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.EntityDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TransportCompanyServiceClient.prototype.deleteByIdTransportCompany =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TransportCompanyService/deleteByIdTransportCompany',
      request,
      metadata,
      methodInfo_TransportCompanyService_deleteByIdTransportCompany,
      callback);
};


/**
 * @param {!proto.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.EntityDeleteResponse>}
 *     The XHR Node Readable Stream
 */
proto.TransportCompanyServicePromiseClient.prototype.deleteByIdTransportCompany =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteByIdTransportCompany(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto;

