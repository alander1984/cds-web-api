/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var common_pb = require('./common_pb.js')

var stores_pb = require('./stores_pb.js')
const proto = require('./Delivery_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.DeliveryServiceClient =
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
proto.DeliveryServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.DeliveryServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.DeliveryServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Empty,
 *   !proto.DeliveryAllResponse>}
 */
const methodInfo_DeliveryService_readAllDelivery = new grpc.web.AbstractClientBase.MethodInfo(
  proto.DeliveryAllResponse,
  /** @param {!proto.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.DeliveryAllResponse.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.DeliveryAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.DeliveryAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DeliveryServiceClient.prototype.readAllDelivery =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DeliveryService/readAllDelivery',
      request,
      metadata,
      methodInfo_DeliveryService_readAllDelivery,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.DeliveryAllResponse>}
 *     The XHR Node Readable Stream
 */
proto.DeliveryServicePromiseClient.prototype.readAllDelivery =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.readAllDelivery(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.DeliveryIdRequest,
 *   !proto.DeliveryItemAllResponse>}
 */
const methodInfo_DeliveryService_readAllDeliveryItemForDeliveryById = new grpc.web.AbstractClientBase.MethodInfo(
  proto.DeliveryItemAllResponse,
  /** @param {!proto.DeliveryIdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.DeliveryItemAllResponse.deserializeBinary
);


/**
 * @param {!proto.DeliveryIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.DeliveryItemAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.DeliveryItemAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DeliveryServiceClient.prototype.readAllDeliveryItemForDeliveryById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DeliveryService/readAllDeliveryItemForDeliveryById',
      request,
      metadata,
      methodInfo_DeliveryService_readAllDeliveryItemForDeliveryById,
      callback);
};


/**
 * @param {!proto.DeliveryIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.DeliveryItemAllResponse>}
 *     The XHR Node Readable Stream
 */
proto.DeliveryServicePromiseClient.prototype.readAllDeliveryItemForDeliveryById =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.readAllDeliveryItemForDeliveryById(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.DeliveryStatusChangeRequest,
 *   !proto.DeliveryChangeStatusResponse>}
 */
const methodInfo_DeliveryService_changeStatusDelivery = new grpc.web.AbstractClientBase.MethodInfo(
  proto.DeliveryChangeStatusResponse,
  /** @param {!proto.DeliveryStatusChangeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.DeliveryChangeStatusResponse.deserializeBinary
);


/**
 * @param {!proto.DeliveryStatusChangeRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.DeliveryChangeStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.DeliveryChangeStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DeliveryServiceClient.prototype.changeStatusDelivery =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DeliveryService/changeStatusDelivery',
      request,
      metadata,
      methodInfo_DeliveryService_changeStatusDelivery,
      callback);
};


/**
 * @param {!proto.DeliveryStatusChangeRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.DeliveryChangeStatusResponse>}
 *     The XHR Node Readable Stream
 */
proto.DeliveryServicePromiseClient.prototype.changeStatusDelivery =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.changeStatusDelivery(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto;

