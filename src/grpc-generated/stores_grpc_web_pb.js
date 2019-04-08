/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var common_pb = require('./common_pb.js')
const proto = require('./stores_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.StoreServiceClient =
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
proto.StoreServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.StoreServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.StoreServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Store,
 *   !proto.StoreCreateResponse>}
 */
const methodInfo_StoreService_createOrUpdateStore = new grpc.web.AbstractClientBase.MethodInfo(
  proto.StoreCreateResponse,
  /** @param {!proto.Store} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.StoreCreateResponse.deserializeBinary
);


/**
 * @param {!proto.Store} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.StoreCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.StoreCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.StoreServiceClient.prototype.createOrUpdateStore =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/StoreService/createOrUpdateStore',
      request,
      metadata,
      methodInfo_StoreService_createOrUpdateStore,
      callback);
};


/**
 * @param {!proto.Store} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.StoreCreateResponse>}
 *     The XHR Node Readable Stream
 */
proto.StoreServicePromiseClient.prototype.createOrUpdateStore =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createOrUpdateStore(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.StoreIdRequest,
 *   !proto.Store>}
 */
const methodInfo_StoreService_getStoreById = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Store,
  /** @param {!proto.StoreIdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.Store.deserializeBinary
);


/**
 * @param {!proto.StoreIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Store)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Store>|undefined}
 *     The XHR Node Readable Stream
 */
proto.StoreServiceClient.prototype.getStoreById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/StoreService/getStoreById',
      request,
      metadata,
      methodInfo_StoreService_getStoreById,
      callback);
};


/**
 * @param {!proto.StoreIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Store>}
 *     The XHR Node Readable Stream
 */
proto.StoreServicePromiseClient.prototype.getStoreById =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getStoreById(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Empty,
 *   !proto.StoreGetAllResponse>}
 */
const methodInfo_StoreService_getAllStore = new grpc.web.AbstractClientBase.MethodInfo(
  proto.StoreGetAllResponse,
  /** @param {!proto.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.StoreGetAllResponse.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.StoreGetAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.StoreGetAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.StoreServiceClient.prototype.getAllStore =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/StoreService/getAllStore',
      request,
      metadata,
      methodInfo_StoreService_getAllStore,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.StoreGetAllResponse>}
 *     The XHR Node Readable Stream
 */
proto.StoreServicePromiseClient.prototype.getAllStore =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getAllStore(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.StoreIdRequest,
 *   !proto.StoreDeleteResponse>}
 */
const methodInfo_StoreService_deleteStoreById = new grpc.web.AbstractClientBase.MethodInfo(
  proto.StoreDeleteResponse,
  /** @param {!proto.StoreIdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.StoreDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.StoreIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.StoreDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.StoreDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.StoreServiceClient.prototype.deleteStoreById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/StoreService/deleteStoreById',
      request,
      metadata,
      methodInfo_StoreService_deleteStoreById,
      callback);
};


/**
 * @param {!proto.StoreIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.StoreDeleteResponse>}
 *     The XHR Node Readable Stream
 */
proto.StoreServicePromiseClient.prototype.deleteStoreById =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteStoreById(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto;

