/**
 * @fileoverview gRPC-Web generated client stub for routeservice
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.routeservice = require('./routes_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.routeservice.RouteServiceClient =
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
proto.routeservice.RouteServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.routeservice.RouteServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.routeservice.RouteServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.routeservice.RouteRequest,
 *   !proto.routeservice.Route>}
 */
const methodInfo_RouteService_GetRoute = new grpc.web.AbstractClientBase.MethodInfo(
  proto.routeservice.Route,
  /** @param {!proto.routeservice.RouteRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.routeservice.Route.deserializeBinary
);


/**
 * @param {!proto.routeservice.RouteRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.routeservice.Route)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.routeservice.Route>|undefined}
 *     The XHR Node Readable Stream
 */
proto.routeservice.RouteServiceClient.prototype.getRoute =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/routeservice.RouteService/GetRoute',
      request,
      metadata,
      methodInfo_RouteService_GetRoute,
      callback);
};


/**
 * @param {!proto.routeservice.RouteRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.routeservice.Route>}
 *     The XHR Node Readable Stream
 */
proto.routeservice.RouteServicePromiseClient.prototype.getRoute =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getRoute(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.routeservice;

