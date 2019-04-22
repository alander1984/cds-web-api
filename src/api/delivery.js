const {Delivery, DeliveryItem, User, DeliveryAllResponse, DeliveryIdRequest, DeliveryItemAllResponse, DeliveryStatusChangeRequest,DeliveryChangeStatusResponse} = require('../grpc-generated/Delivery_pb.js');
const {Empty} = require('../grpc-generated/common_pb.js');
const {Store} = require('../grpc-generated/stores_pb.js');
var Config = require('Config');
const {DeliveryServiceClient} = require('../grpc-generated/Delivery_grpc_web_pb.js');
var clientDelivery = new DeliveryServiceClient(Config.backendRFPEndpoint);

module.exports = {
    Deliveries: {
        sendNewDeliveries : function () {
            return new Promise((resolve, reject) => {
                var request = new Empty();
                clientDelivery.readAllDelivery(request, {}, (err, deliveries) => {
                    var listDeliveries = [];
                    var d = deliveries.getDeliveriesList();
                    console.log("SIZE  " + d.length);
                    d.forEach(function(item, index, p){
                        var delivery = new Object();
                        delivery.id = item.getId();
                        delivery.lat = item.getLat();
                        delivery.lon = item.getLon();
                        console.log("delivery.lon  " + delivery.lon);
                        delivery.timeWindow = item.getTimewindow();
                        //let createUser = new User();
                        //createUser = item.getCreateuser();
                        //console.log("CreateUser.name  " + createUser.getName());
                        delivery.createUserId = item.getCreateuser().getId();
                        delivery.createUserName = item.getCreateuser().getName();
                        console.log("delivery.createUser.name  " + delivery.createUserName);
                        delivery.createdDate = item.getCreateddate();
                        delivery.lastUpdateUserId = item.getLastupdateuser().getId();
                        delivery.lastUpdateUserName = item.getLastupdateuser().getName();
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
                        delivery.fullName = item.getFullname();
                        delivery.external = item.getExternal();
                        delivery.zone = item.getZone();
                        delivery.metroStation = item.getMetrostation();
                        delivery.floor = item.getFloor();
                        delivery.company = item.getCompany();
                        delivery.phone = item.getPhone();
                        delivery.phoneSecondary = item.getPhonesecondary();
                        delivery.email = item.getEmail();
                        delivery.unloadType = item.getUnloadtype();
                        delivery.paymentStatus = item.getPaymentstatus();
                        delivery.paper = item.getPaper();
                        delivery.consignee = item.getConsignee();
                        //console.log("****** " + delivery.flat + "  " + delivery.lastUpdateUserName) ;
                        delivery.storeId = item.getStore().getId();
                        delivery.storeType = item.getStore().getType();
                        delivery.storeName = item.getStore().getName();
                        delivery.storeCode = item.getStore().getCode();
                        delivery.storeAddress = item.getStore().getAddress();
                        delivery.storeLat = item.getStore().getLat();
                        delivery.storeLon = item.getStore().getLon();
                        delivery.storeComment = item.getStore().getComment();
                        listDeliveries.push(delivery);
                    });
                    //console.log(JSON.stringify(listDeliveries));
                    resolve(listDeliveries);
                });
            });
        },
        getItemsForDelivery: function(id){
            return new Promise((resolve, reject) => {
                var request = new DeliveryIdRequest();
                request.setId(id);
                clientDelivery.readAllDeliveryItemForDeliveryById(request, {}, (err, delivery) =>{
                    var d = delivery.getItemsList();
                    //console.log(JSON.stringify(d));
                    var items = [];
                    
                    d.forEach(function(it, index, d){
                        let delitem = new Object();
                            delitem.id = it.getId();
                            delitem.productlmcode = it.getProductlmcode();
                            delitem.productlmname = it.getProductlmname();
                            delitem.weight = it.getWeight();
                            delitem.height = it.getHeight();
                            delitem.width = it.getWidth();
                            delitem.length = it.getLength();
                            delitem.volume = it.getHeight() * it.getWidth() * it.getLength();
                            delitem.quantity = it.getQuantity();
                            delitem.loadedquantity = it.getLoadedquantity();
                            delitem.approvedquantity = it.getApprovedquantity();
                            delitem.status = it.getStatus();
                            items.push(delitem);
                    });
                    console.log("items SIZE " + items.length);
                    resolve(items);
                });
            });

        },
        changeStatusDelivery: function (request) {
            return new Promise((resolve, reject) => {
                let listDeliveryId = request.list;
                let backendRequest = new DeliveryStatusChangeRequest();
                // Use int number for setting status. See DeliveryStatusEnum in Delivery.proto for find it.
                backendRequest.setNewstatus(request.status);
                backendRequest.setListidList(request.list);
                clientDelivery.changeStatusDelivery(backendRequest, {}, (err, response) => {
                    resolve(response);
                })
            });
        }
    }
};