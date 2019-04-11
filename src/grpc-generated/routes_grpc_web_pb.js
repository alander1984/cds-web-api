/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var common_pb = require('./common_pb.js')

var Transport_pb = require('./Transport_pb.js')

var Delivery_pb = require('./Delivery_pb.js')

var stores_pb = require('./stores_pb.js')
const proto = require('./routes_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.RouteServiceClient =
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
proto.RouteServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.RouteServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.RouteServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Route,
 *   !proto.EntityCreateResponse>}
 */
const methodInfo_RouteService_createOrUpdateRoute = new grpc.web.AbstractClientBase.MethodInfo(
  Transport_pb.EntityCreateResponse,
  /** @param {!proto.Route} request */
  function(request) {
    return request.serializeBinary();
  },
  Transport_pb.EntityCreateResponse.deserializeBinary
);


/**
 * @param {!proto.Route} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.EntityCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.EntityCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.RouteServiceClient.prototype.createOrUpdateRoute =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/RouteService/createOrUpdateRoute',
      request,
      metadata,
      methodInfo_RouteService_createOrUpdateRoute,
      callback);
};


/**
 * @param {!proto.Route} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.EntityCreateResponse>}
 *     The XHR Node Readable Stream
 */
proto.RouteServicePromiseClient.prototype.createOrUpdateRoute =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createOrUpdateRoute(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.EntityIdRequest,
 *   !proto.Route>}
 */
const methodInfo_RouteService_readByIdRoute = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Route,
  /** @param {!proto.EntityIdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.Route.deserializeBinary
);


/**
 * @param {!proto.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Route)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Route>|undefined}
 *     The XHR Node Readable Stream
 */
proto.RouteServiceClient.prototype.readByIdRoute =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/RouteService/readByIdRoute',
      request,
      metadata,
      methodInfo_RouteService_readByIdRoute,
      callback);
};


/**
 * @param {!proto.EntityIdRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Route>}
 *     The XHR Node Readable Stream
 */
proto.RouteServicePromiseClient.prototype.readByIdRoute =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.readByIdRoute(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Empty,
 *   !proto.RouteAllResponse>}
 */
const methodInfo_RouteService_readAllRoutes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.RouteAllResponse,
  /** @param {!proto.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.RouteAllResponse.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.RouteAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.RouteAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.RouteServiceClient.prototype.readAllRoutes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/RouteService/readAllRoutes',
      request,
      metadata,
      methodInfo_RouteService_readAllRoutes,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.RouteAllResponse>}
 *     The XHR Node Readable Stream
 */
proto.RouteServicePromiseClient.prototype.readAllRoutes =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.readAllRoutes(
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
const methodInfo_RouteService_deleteByIdRoute = new grpc.web.AbstractClientBase.MethodInfo(
  Transport_pb.EntityDeleteResponse,
  /** @param {!proto.EntityIdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  Transport_pb.EntityDeleteResponse.deserializeBinary
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
proto.RouteServiceClient.prototype.deleteByIdRoute =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/RouteService/deleteByIdRoute',
      request,
      metadata,
      methodInfo_RouteService_deleteByIdRoute,
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
proto.RouteServicePromiseClient.prototype.deleteByIdRoute =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteByIdRoute(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto;

