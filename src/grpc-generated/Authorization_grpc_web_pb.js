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
proto.tech.lmru.auth.grpc.service.generated.impl = require('./Authorization_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.tech.lmru.auth.grpc.service.generated.impl.TokenServiceClient =
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
proto.tech.lmru.auth.grpc.service.generated.impl.TokenServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.tech.lmru.auth.grpc.service.generated.impl.TokenServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.tech.lmru.auth.grpc.service.generated.impl.TokenServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.AuthenticationRequest,
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.AccessToken>}
 */
const methodInfo_TokenService_getToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tech.lmru.auth.grpc.service.generated.impl.AccessToken,
  /** @param {!proto.tech.lmru.auth.grpc.service.generated.impl.AuthenticationRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.tech.lmru.auth.grpc.service.generated.impl.AccessToken.deserializeBinary
);


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.AuthenticationRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tech.lmru.auth.grpc.service.generated.impl.AccessToken)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tech.lmru.auth.grpc.service.generated.impl.AccessToken>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.TokenServiceClient.prototype.getToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tech.lmru.auth.grpc.service.generated.impl.TokenService/getToken',
      request,
      metadata,
      methodInfo_TokenService_getToken,
      callback);
};


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.AuthenticationRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tech.lmru.auth.grpc.service.generated.impl.AccessToken>}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.TokenServicePromiseClient.prototype.getToken =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getToken(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.CheckTokenRequest,
 *   !proto.tech.lmru.auth.grpc.service.generated.impl.AccessToken>}
 */
const methodInfo_TokenService_checkToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tech.lmru.auth.grpc.service.generated.impl.AccessToken,
  /** @param {!proto.tech.lmru.auth.grpc.service.generated.impl.CheckTokenRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.tech.lmru.auth.grpc.service.generated.impl.AccessToken.deserializeBinary
);


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.CheckTokenRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tech.lmru.auth.grpc.service.generated.impl.AccessToken)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tech.lmru.auth.grpc.service.generated.impl.AccessToken>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.TokenServiceClient.prototype.checkToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tech.lmru.auth.grpc.service.generated.impl.TokenService/checkToken',
      request,
      metadata,
      methodInfo_TokenService_checkToken,
      callback);
};


/**
 * @param {!proto.tech.lmru.auth.grpc.service.generated.impl.CheckTokenRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tech.lmru.auth.grpc.service.generated.impl.AccessToken>}
 *     The XHR Node Readable Stream
 */
proto.tech.lmru.auth.grpc.service.generated.impl.TokenServicePromiseClient.prototype.checkToken =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.checkToken(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.tech.lmru.auth.grpc.service.generated.impl;

