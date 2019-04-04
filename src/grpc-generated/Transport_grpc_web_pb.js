/**
 * @fileoverview gRPC-Web generated client stub for transportservice
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var common_pb = require('./common_pb.js')
const proto = {};
proto.transportservice = require('./Transport_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.transportservice.DriverServiceClient =
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
proto.transportservice.DriverServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.transportservice.DriverServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.transportservice.DriverServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.transportservice.Driver,
 *   !proto.transportservice.EntityCreateResponse>}
 */
const methodInfo_DriverService_createOrUpdateDriver = new grpc.web.AbstractClientBase.MethodInfo(
  proto.transportservice.EntityCreateResponse,
  /** @param {!proto.transportservice.Driver} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.transportservice.EntityCreateResponse.deserializeBinary
);


/**
 * @param {!proto.transportservice.Driver} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.transportservice.EntityCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.transportservice.EntityCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.transportservice.DriverServiceClient.prototype.createOrUpdateDriver =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/transportservice.DriverService/createOrUpdateDriver',
      request,
      metadata,
      methodInfo_DriverService_createOrUpdateDriver,
      callback);
};


/**
 * @param {!proto.transportservice.Driver} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.transportservice.EntityCreateResponse>}
 *     The XHR Node Readable Stream
 */
proto.transportservice.DriverServicePromiseClient.prototype.createOrUpdateDriver =
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
 *   !proto.transportservice.EntityIdRequest,
 *   !proto.transportservice.Driver>}
 */
const methodInfo_DriverService_readByIdDriver = new grpc.web.AbstractClientBase.MethodInfo(
  proto.transportservice.Driver,
  /** @param {!proto.transportservice.EntityIdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.transportservice.Driver.deserializeBinary
);


/**
 * @param {!proto.transportservice.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.transportservice.Driver)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.transportservice.Driver>|undefined}
 *     The XHR Node Readable Stream
 */
proto.transportservice.DriverServiceClient.prototype.readByIdDriver =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/transportservice.DriverService/readByIdDriver',
      request,
      metadata,
      methodInfo_DriverService_readByIdDriver,
      callback);
};


/**
 * @param {!proto.transportservice.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.transportservice.Driver>}
 *     The XHR Node Readable Stream
 */
proto.transportservice.DriverServicePromiseClient.prototype.readByIdDriver =
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
 *   !proto.transportservice.DriverAllResponse>}
 */
const methodInfo_DriverService_readAllDrivers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.transportservice.DriverAllResponse,
  /** @param {!proto.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.transportservice.DriverAllResponse.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.transportservice.DriverAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.transportservice.DriverAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.transportservice.DriverServiceClient.prototype.readAllDrivers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/transportservice.DriverService/readAllDrivers',
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
 * @return {!Promise<!proto.transportservice.DriverAllResponse>}
 *     The XHR Node Readable Stream
 */
proto.transportservice.DriverServicePromiseClient.prototype.readAllDrivers =
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
 *   !proto.transportservice.EntityIdRequest,
 *   !proto.transportservice.EntityDeleteResponse>}
 */
const methodInfo_DriverService_deleteByIdDriver = new grpc.web.AbstractClientBase.MethodInfo(
  proto.transportservice.EntityDeleteResponse,
  /** @param {!proto.transportservice.EntityIdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.transportservice.EntityDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.transportservice.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.transportservice.EntityDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.transportservice.EntityDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.transportservice.DriverServiceClient.prototype.deleteByIdDriver =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/transportservice.DriverService/deleteByIdDriver',
      request,
      metadata,
      methodInfo_DriverService_deleteByIdDriver,
      callback);
};


/**
 * @param {!proto.transportservice.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.transportservice.EntityDeleteResponse>}
 *     The XHR Node Readable Stream
 */
proto.transportservice.DriverServicePromiseClient.prototype.deleteByIdDriver =
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
proto.transportservice.VehicleServiceClient =
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
proto.transportservice.VehicleServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.transportservice.VehicleServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.transportservice.VehicleServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.transportservice.Vehicle,
 *   !proto.transportservice.EntityCreateResponse>}
 */
const methodInfo_VehicleService_createOrUpdateVehicle = new grpc.web.AbstractClientBase.MethodInfo(
  proto.transportservice.EntityCreateResponse,
  /** @param {!proto.transportservice.Vehicle} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.transportservice.EntityCreateResponse.deserializeBinary
);


/**
 * @param {!proto.transportservice.Vehicle} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.transportservice.EntityCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.transportservice.EntityCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.transportservice.VehicleServiceClient.prototype.createOrUpdateVehicle =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/transportservice.VehicleService/createOrUpdateVehicle',
      request,
      metadata,
      methodInfo_VehicleService_createOrUpdateVehicle,
      callback);
};


/**
 * @param {!proto.transportservice.Vehicle} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.transportservice.EntityCreateResponse>}
 *     The XHR Node Readable Stream
 */
proto.transportservice.VehicleServicePromiseClient.prototype.createOrUpdateVehicle =
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
 *   !proto.transportservice.EntityIdRequest,
 *   !proto.transportservice.Vehicle>}
 */
const methodInfo_VehicleService_readByIdVehicle = new grpc.web.AbstractClientBase.MethodInfo(
  proto.transportservice.Vehicle,
  /** @param {!proto.transportservice.EntityIdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.transportservice.Vehicle.deserializeBinary
);


/**
 * @param {!proto.transportservice.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.transportservice.Vehicle)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.transportservice.Vehicle>|undefined}
 *     The XHR Node Readable Stream
 */
proto.transportservice.VehicleServiceClient.prototype.readByIdVehicle =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/transportservice.VehicleService/readByIdVehicle',
      request,
      metadata,
      methodInfo_VehicleService_readByIdVehicle,
      callback);
};


/**
 * @param {!proto.transportservice.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.transportservice.Vehicle>}
 *     The XHR Node Readable Stream
 */
proto.transportservice.VehicleServicePromiseClient.prototype.readByIdVehicle =
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
 *   !proto.transportservice.VehicleAllResponse>}
 */
const methodInfo_VehicleService_readAllVehicles = new grpc.web.AbstractClientBase.MethodInfo(
  proto.transportservice.VehicleAllResponse,
  /** @param {!proto.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.transportservice.VehicleAllResponse.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.transportservice.VehicleAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.transportservice.VehicleAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.transportservice.VehicleServiceClient.prototype.readAllVehicles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/transportservice.VehicleService/readAllVehicles',
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
 * @return {!Promise<!proto.transportservice.VehicleAllResponse>}
 *     The XHR Node Readable Stream
 */
proto.transportservice.VehicleServicePromiseClient.prototype.readAllVehicles =
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
 *   !proto.transportservice.EntityIdRequest,
 *   !proto.transportservice.EntityDeleteResponse>}
 */
const methodInfo_VehicleService_deleteByIdVehicle = new grpc.web.AbstractClientBase.MethodInfo(
  proto.transportservice.EntityDeleteResponse,
  /** @param {!proto.transportservice.EntityIdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.transportservice.EntityDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.transportservice.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.transportservice.EntityDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.transportservice.EntityDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.transportservice.VehicleServiceClient.prototype.deleteByIdVehicle =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/transportservice.VehicleService/deleteByIdVehicle',
      request,
      metadata,
      methodInfo_VehicleService_deleteByIdVehicle,
      callback);
};


/**
 * @param {!proto.transportservice.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.transportservice.EntityDeleteResponse>}
 *     The XHR Node Readable Stream
 */
proto.transportservice.VehicleServicePromiseClient.prototype.deleteByIdVehicle =
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
proto.transportservice.TransportCompanyServiceClient =
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
proto.transportservice.TransportCompanyServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.transportservice.TransportCompanyServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.transportservice.TransportCompanyServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.transportservice.TransportCompany,
 *   !proto.transportservice.EntityCreateResponse>}
 */
const methodInfo_TransportCompanyService_createOrUpdateTransportCompany = new grpc.web.AbstractClientBase.MethodInfo(
  proto.transportservice.EntityCreateResponse,
  /** @param {!proto.transportservice.TransportCompany} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.transportservice.EntityCreateResponse.deserializeBinary
);


/**
 * @param {!proto.transportservice.TransportCompany} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.transportservice.EntityCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.transportservice.EntityCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.transportservice.TransportCompanyServiceClient.prototype.createOrUpdateTransportCompany =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/transportservice.TransportCompanyService/createOrUpdateTransportCompany',
      request,
      metadata,
      methodInfo_TransportCompanyService_createOrUpdateTransportCompany,
      callback);
};


/**
 * @param {!proto.transportservice.TransportCompany} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.transportservice.EntityCreateResponse>}
 *     The XHR Node Readable Stream
 */
proto.transportservice.TransportCompanyServicePromiseClient.prototype.createOrUpdateTransportCompany =
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
 *   !proto.transportservice.EntityIdRequest,
 *   !proto.transportservice.TransportCompany>}
 */
const methodInfo_TransportCompanyService_readByIdTransportCompany = new grpc.web.AbstractClientBase.MethodInfo(
  proto.transportservice.TransportCompany,
  /** @param {!proto.transportservice.EntityIdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.transportservice.TransportCompany.deserializeBinary
);


/**
 * @param {!proto.transportservice.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.transportservice.TransportCompany)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.transportservice.TransportCompany>|undefined}
 *     The XHR Node Readable Stream
 */
proto.transportservice.TransportCompanyServiceClient.prototype.readByIdTransportCompany =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/transportservice.TransportCompanyService/readByIdTransportCompany',
      request,
      metadata,
      methodInfo_TransportCompanyService_readByIdTransportCompany,
      callback);
};


/**
 * @param {!proto.transportservice.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.transportservice.TransportCompany>}
 *     The XHR Node Readable Stream
 */
proto.transportservice.TransportCompanyServicePromiseClient.prototype.readByIdTransportCompany =
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
 *   !proto.transportservice.TransportCompanyAllResponse>}
 */
const methodInfo_TransportCompanyService_readAllTransportCompanies = new grpc.web.AbstractClientBase.MethodInfo(
  proto.transportservice.TransportCompanyAllResponse,
  /** @param {!proto.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.transportservice.TransportCompanyAllResponse.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.transportservice.TransportCompanyAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.transportservice.TransportCompanyAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.transportservice.TransportCompanyServiceClient.prototype.readAllTransportCompanies =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/transportservice.TransportCompanyService/readAllTransportCompanies',
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
 * @return {!Promise<!proto.transportservice.TransportCompanyAllResponse>}
 *     The XHR Node Readable Stream
 */
proto.transportservice.TransportCompanyServicePromiseClient.prototype.readAllTransportCompanies =
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
 *   !proto.transportservice.EntityIdRequest,
 *   !proto.transportservice.EntityDeleteResponse>}
 */
const methodInfo_TransportCompanyService_deleteByIdTransportCompany = new grpc.web.AbstractClientBase.MethodInfo(
  proto.transportservice.EntityDeleteResponse,
  /** @param {!proto.transportservice.EntityIdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.transportservice.EntityDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.transportservice.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.transportservice.EntityDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.transportservice.EntityDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.transportservice.TransportCompanyServiceClient.prototype.deleteByIdTransportCompany =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/transportservice.TransportCompanyService/deleteByIdTransportCompany',
      request,
      metadata,
      methodInfo_TransportCompanyService_deleteByIdTransportCompany,
      callback);
};


/**
 * @param {!proto.transportservice.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.transportservice.EntityDeleteResponse>}
 *     The XHR Node Readable Stream
 */
proto.transportservice.TransportCompanyServicePromiseClient.prototype.deleteByIdTransportCompany =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteByIdTransportCompany(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.transportservice;

