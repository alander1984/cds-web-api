/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var common_pb = require('./common_pb.js');
goog.object.extend(proto, common_pb);
var stores_pb = require('./stores_pb.js');
goog.object.extend(proto, stores_pb);
goog.exportSymbol('proto.Delivery', null, global);
goog.exportSymbol('proto.DeliveryAllResponse', null, global);
goog.exportSymbol('proto.DeliveryItem', null, global);
goog.exportSymbol('proto.DeliveryStatusEnum', null, global);
goog.exportSymbol('proto.User', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Delivery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Delivery.repeatedFields_, null);
};
goog.inherits(proto.Delivery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Delivery.displayName = 'proto.Delivery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DeliveryItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DeliveryItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DeliveryItem.displayName = 'proto.DeliveryItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.User.displayName = 'proto.User';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DeliveryAllResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DeliveryAllResponse.repeatedFields_, null);
};
goog.inherits(proto.DeliveryAllResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DeliveryAllResponse.displayName = 'proto.DeliveryAllResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Delivery.repeatedFields_ = [18];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Delivery.prototype.toObject = function(opt_includeInstance) {
  return proto.Delivery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Delivery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Delivery.toObject = function(includeInstance, msg) {
  var obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    lat: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    lon: +jspb.Message.getFieldWithDefault(msg, 3, 0.0),
    timewindow: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createuser: (f = msg.getCreateuser()) && proto.User.toObject(includeInstance, f),
    createddate: jspb.Message.getFieldWithDefault(msg, 6, ""),
    lastupdateuser: (f = msg.getLastupdateuser()) && proto.User.toObject(includeInstance, f),
    lastupdatedate: jspb.Message.getFieldWithDefault(msg, 8, ""),
    status: jspb.Message.getFieldWithDefault(msg, 9, 0),
    deliverydatemin: jspb.Message.getFieldWithDefault(msg, 10, ""),
    deliverydatemax: jspb.Message.getFieldWithDefault(msg, 11, ""),
    comment: jspb.Message.getFieldWithDefault(msg, 12, ""),
    city: jspb.Message.getFieldWithDefault(msg, 13, ""),
    street: jspb.Message.getFieldWithDefault(msg, 14, ""),
    house: jspb.Message.getFieldWithDefault(msg, 15, ""),
    entrance: jspb.Message.getFieldWithDefault(msg, 16, ""),
    flat: jspb.Message.getFieldWithDefault(msg, 17, ""),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.DeliveryItem.toObject, includeInstance),
    store: (f = msg.getStore()) && stores_pb.Store.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Delivery}
 */
proto.Delivery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Delivery;
  return proto.Delivery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Delivery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Delivery}
 */
proto.Delivery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLat(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLon(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimewindow(value);
      break;
    case 5:
      var value = new proto.User;
      reader.readMessage(value,proto.User.deserializeBinaryFromReader);
      msg.setCreateuser(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreateddate(value);
      break;
    case 7:
      var value = new proto.User;
      reader.readMessage(value,proto.User.deserializeBinaryFromReader);
      msg.setLastupdateuser(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastupdatedate(value);
      break;
    case 9:
      var value = /** @type {!proto.DeliveryStatusEnum} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeliverydatemin(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeliverydatemax(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreet(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setHouse(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntrance(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setFlat(value);
      break;
    case 18:
      var value = new proto.DeliveryItem;
      reader.readMessage(value,proto.DeliveryItem.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    case 19:
      var value = new stores_pb.Store;
      reader.readMessage(value,stores_pb.Store.deserializeBinaryFromReader);
      msg.setStore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Delivery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Delivery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Delivery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Delivery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLat();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getLon();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getTimewindow();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreateuser();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.User.serializeBinaryToWriter
    );
  }
  f = message.getCreateddate();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getLastupdateuser();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.User.serializeBinaryToWriter
    );
  }
  f = message.getLastupdatedate();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getDeliverydatemin();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getDeliverydatemax();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getStreet();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getHouse();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getEntrance();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getFlat();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      18,
      f,
      proto.DeliveryItem.serializeBinaryToWriter
    );
  }
  f = message.getStore();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      stores_pb.Store.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.Delivery.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.Delivery.prototype.setId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional double lat = 2;
 * @return {number}
 */
proto.Delivery.prototype.getLat = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.Delivery.prototype.setLat = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double lon = 3;
 * @return {number}
 */
proto.Delivery.prototype.getLon = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.Delivery.prototype.setLon = function(value) {
  jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string timeWindow = 4;
 * @return {string}
 */
proto.Delivery.prototype.getTimewindow = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.Delivery.prototype.setTimewindow = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional User createUser = 5;
 * @return {?proto.User}
 */
proto.Delivery.prototype.getCreateuser = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, proto.User, 5));
};


/** @param {?proto.User|undefined} value */
proto.Delivery.prototype.setCreateuser = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.Delivery.prototype.clearCreateuser = function() {
  this.setCreateuser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Delivery.prototype.hasCreateuser = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string createdDate = 6;
 * @return {string}
 */
proto.Delivery.prototype.getCreateddate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.Delivery.prototype.setCreateddate = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional User lastUpdateUser = 7;
 * @return {?proto.User}
 */
proto.Delivery.prototype.getLastupdateuser = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, proto.User, 7));
};


/** @param {?proto.User|undefined} value */
proto.Delivery.prototype.setLastupdateuser = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.Delivery.prototype.clearLastupdateuser = function() {
  this.setLastupdateuser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Delivery.prototype.hasLastupdateuser = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string lastUpdateDate = 8;
 * @return {string}
 */
proto.Delivery.prototype.getLastupdatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.Delivery.prototype.setLastupdatedate = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional DeliveryStatusEnum status = 9;
 * @return {!proto.DeliveryStatusEnum}
 */
proto.Delivery.prototype.getStatus = function() {
  return /** @type {!proto.DeliveryStatusEnum} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {!proto.DeliveryStatusEnum} value */
proto.Delivery.prototype.setStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional string deliveryDateMin = 10;
 * @return {string}
 */
proto.Delivery.prototype.getDeliverydatemin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.Delivery.prototype.setDeliverydatemin = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string deliveryDateMax = 11;
 * @return {string}
 */
proto.Delivery.prototype.getDeliverydatemax = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.Delivery.prototype.setDeliverydatemax = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string comment = 12;
 * @return {string}
 */
proto.Delivery.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.Delivery.prototype.setComment = function(value) {
  jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string city = 13;
 * @return {string}
 */
proto.Delivery.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/** @param {string} value */
proto.Delivery.prototype.setCity = function(value) {
  jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string street = 14;
 * @return {string}
 */
proto.Delivery.prototype.getStreet = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/** @param {string} value */
proto.Delivery.prototype.setStreet = function(value) {
  jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string house = 15;
 * @return {string}
 */
proto.Delivery.prototype.getHouse = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/** @param {string} value */
proto.Delivery.prototype.setHouse = function(value) {
  jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string entrance = 16;
 * @return {string}
 */
proto.Delivery.prototype.getEntrance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/** @param {string} value */
proto.Delivery.prototype.setEntrance = function(value) {
  jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string flat = 17;
 * @return {string}
 */
proto.Delivery.prototype.getFlat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/** @param {string} value */
proto.Delivery.prototype.setFlat = function(value) {
  jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * repeated DeliveryItem items = 18;
 * @return {!Array<!proto.DeliveryItem>}
 */
proto.Delivery.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.DeliveryItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.DeliveryItem, 18));
};


/** @param {!Array<!proto.DeliveryItem>} value */
proto.Delivery.prototype.setItemsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 18, value);
};


/**
 * @param {!proto.DeliveryItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.DeliveryItem}
 */
proto.Delivery.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 18, opt_value, proto.DeliveryItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.Delivery.prototype.clearItemsList = function() {
  this.setItemsList([]);
};


/**
 * optional Store store = 19;
 * @return {?proto.Store}
 */
proto.Delivery.prototype.getStore = function() {
  return /** @type{?proto.Store} */ (
    jspb.Message.getWrapperField(this, stores_pb.Store, 19));
};


/** @param {?proto.Store|undefined} value */
proto.Delivery.prototype.setStore = function(value) {
  jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.Delivery.prototype.clearStore = function() {
  this.setStore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Delivery.prototype.hasStore = function() {
  return jspb.Message.getField(this, 19) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DeliveryItem.prototype.toObject = function(opt_includeInstance) {
  return proto.DeliveryItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DeliveryItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeliveryItem.toObject = function(includeInstance, msg) {
  var obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    productlmcode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    productlmname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    weight: +jspb.Message.getFieldWithDefault(msg, 4, 0.0),
    volume: +jspb.Message.getFieldWithDefault(msg, 5, 0.0),
    width: +jspb.Message.getFieldWithDefault(msg, 6, 0.0),
    length: +jspb.Message.getFieldWithDefault(msg, 7, 0.0),
    quantity: +jspb.Message.getFieldWithDefault(msg, 8, 0.0),
    loadedquantity: +jspb.Message.getFieldWithDefault(msg, 9, 0.0),
    approvedquantity: +jspb.Message.getFieldWithDefault(msg, 10, 0.0),
    status: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DeliveryItem}
 */
proto.DeliveryItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DeliveryItem;
  return proto.DeliveryItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DeliveryItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DeliveryItem}
 */
proto.DeliveryItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductlmcode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductlmname(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWeight(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolume(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWidth(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLength(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setQuantity(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLoadedquantity(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setApprovedquantity(value);
      break;
    case 11:
      var value = /** @type {!proto.DeliveryStatusEnum} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DeliveryItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DeliveryItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DeliveryItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeliveryItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getProductlmcode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProductlmname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWeight();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getWidth();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getLength();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getLoadedquantity();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getApprovedquantity();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.DeliveryItem.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DeliveryItem.prototype.setId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string productLMCode = 2;
 * @return {string}
 */
proto.DeliveryItem.prototype.getProductlmcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DeliveryItem.prototype.setProductlmcode = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string productLMName = 3;
 * @return {string}
 */
proto.DeliveryItem.prototype.getProductlmname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.DeliveryItem.prototype.setProductlmname = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional double weight = 4;
 * @return {number}
 */
proto.DeliveryItem.prototype.getWeight = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.DeliveryItem.prototype.setWeight = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double volume = 5;
 * @return {number}
 */
proto.DeliveryItem.prototype.getVolume = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.DeliveryItem.prototype.setVolume = function(value) {
  jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double width = 6;
 * @return {number}
 */
proto.DeliveryItem.prototype.getWidth = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.DeliveryItem.prototype.setWidth = function(value) {
  jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double length = 7;
 * @return {number}
 */
proto.DeliveryItem.prototype.getLength = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 7, 0.0));
};


/** @param {number} value */
proto.DeliveryItem.prototype.setLength = function(value) {
  jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double quantity = 8;
 * @return {number}
 */
proto.DeliveryItem.prototype.getQuantity = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 8, 0.0));
};


/** @param {number} value */
proto.DeliveryItem.prototype.setQuantity = function(value) {
  jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional double loadedQuantity = 9;
 * @return {number}
 */
proto.DeliveryItem.prototype.getLoadedquantity = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 9, 0.0));
};


/** @param {number} value */
proto.DeliveryItem.prototype.setLoadedquantity = function(value) {
  jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional double approvedQuantity = 10;
 * @return {number}
 */
proto.DeliveryItem.prototype.getApprovedquantity = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 10, 0.0));
};


/** @param {number} value */
proto.DeliveryItem.prototype.setApprovedquantity = function(value) {
  jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional DeliveryStatusEnum status = 11;
 * @return {!proto.DeliveryStatusEnum}
 */
proto.DeliveryItem.prototype.getStatus = function() {
  return /** @type {!proto.DeliveryStatusEnum} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {!proto.DeliveryStatusEnum} value */
proto.DeliveryItem.prototype.setStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.User.prototype.toObject = function(opt_includeInstance) {
  return proto.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.User.toObject = function(includeInstance, msg) {
  var obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.User}
 */
proto.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.User;
  return proto.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.User}
 */
proto.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.User.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.User.prototype.setId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.User.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.User.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DeliveryAllResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DeliveryAllResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DeliveryAllResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DeliveryAllResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeliveryAllResponse.toObject = function(includeInstance, msg) {
  var obj = {
    deliveriesList: jspb.Message.toObjectList(msg.getDeliveriesList(),
    proto.Delivery.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DeliveryAllResponse}
 */
proto.DeliveryAllResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DeliveryAllResponse;
  return proto.DeliveryAllResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DeliveryAllResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DeliveryAllResponse}
 */
proto.DeliveryAllResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Delivery;
      reader.readMessage(value,proto.Delivery.deserializeBinaryFromReader);
      msg.addDeliveries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DeliveryAllResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DeliveryAllResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DeliveryAllResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeliveryAllResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeliveriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Delivery.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Delivery deliveries = 1;
 * @return {!Array<!proto.Delivery>}
 */
proto.DeliveryAllResponse.prototype.getDeliveriesList = function() {
  return /** @type{!Array<!proto.Delivery>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Delivery, 1));
};


/** @param {!Array<!proto.Delivery>} value */
proto.DeliveryAllResponse.prototype.setDeliveriesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Delivery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Delivery}
 */
proto.DeliveryAllResponse.prototype.addDeliveries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Delivery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.DeliveryAllResponse.prototype.clearDeliveriesList = function() {
  this.setDeliveriesList([]);
};


/**
 * @enum {number}
 */
proto.DeliveryStatusEnum = {
  NEW: 0,
  APPROVED: 1,
  ONDELIVERY: 2,
  DELIVERED: 3,
  PARTIALLYDELIVERED: 4,
  RETURNONDELIVERY: 5,
  CANCELLED: 6
};

goog.object.extend(exports, proto);
