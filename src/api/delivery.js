const {Delivery, DeliveryStatusEnum, DeliveryItem, User, DeliveryAllResponse} = require('../grpc-generated/Delivery_pb.js');
const {Store, Empty} = require('../grpc-generated/common_pb.js');
var Config = require('Config');
const {DeliveryServiceClient} = require('../grpc-generated/Delivery_grpc_web_pb.js');
var clientDelivery = new DeliveryServiceClient(Config.backendAPITestEndpoint);

module.export = {
    Deliveries: {
        sendNewDeliveries : function () {
            return new Promise((resolve, reject) => {
                var request = new Empty();
                clientDelivery.readAllDelivery(request, {}, (err, deliveries) => {
                    var listDeliveries = [];
                    var d = deliveries.getDeliveriesList();
                    d.forEach(function(item, index){
                        var delivery = new Object();
                        delivery.id = item.getId();
                        delivery.lat = item.getLat();
                        delivery.lon = item.getLon();
                        delivery.timeWindow = item.getTimewindow();
                        delivery.createUser.id = item.getCreateuser().getId();
                        delivery.createUser.name = item.getCreateuser().getName();
                        delivery.createdDate = item.getCreateddate();
                        delivery.lastUpdateUser.id = item.getLastupdateuser().getId();
                        delivery.lastUpdateUser.name = item.getLastupdateuser().getName();
                        delivery.lastUpdateDate = item.getLastupdatedate();
                        delivery.status = item.getStatus();
                        delivery.deliveryDateMin = item.getDeliverydatemin();
                        delivery.deliveryDateMax = item.getDeliverydatemax();
                        delivery.comment = item.getComment();
                        delivery.city = item.getCity();
                        delivery.street = item.getStreet();
                        delivery.house = item.getHouse();
                        delivery.entrance = item.getEntrance();
                        delivery.flat = item.getFlat();
                        delivery.items = [];
                        let _delItems = item.getItemsList();
                        _delItems.forEach(function(it, index){
                            let delitem = new Object();
                                delitem.id = it.getId();
                                delitem.productlmcode = it.getProductlmcode();
                                delitem.productlmname = it.getProductlmname();
                                delitem.weight = it.getwWeight();
                                delitem.volume = it.getVolume();
                                delitem.width = it.getWidth();
                                delitem.length = it.getLength();
                                delitem.quantity = it.getQuantity();
                                delitem.loadedquantity = it.getLoadedquantity();
                                delitem.approvedquantity = it.getApprovedquantity();
                                delitem.status = it.getStatus();
                                delivery.items.push(delitem);
                        });
                        delivery.store.id = item.getStore().getId();
                        delivery.store.type = item.getStore().getType();
                        delivery.store.name = item.getStore().getName();
                        delivery.store.code = item.getStore().getCode();
                        delivery.store.address = item.getStore().getAddress();
                        delivery.store.lat = item.getStore().getLat();
                        delivery.store.lon = item.getStore().getLon();
                        delivery.store.comment = item.getStore().getComment();
                        listDeliveries.push(delivery);
                    });
                    resolve(listDeliveries);
                });
            });
        }
    }
};