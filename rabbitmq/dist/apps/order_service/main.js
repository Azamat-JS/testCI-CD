/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/order_service/src/constants.ts":
/*!*********************************************!*\
  !*** ./apps/order_service/src/constants.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NOTIFICATION_SERVICE_RABBITMQ = exports.PAYMENT_SERVICE_RABBITMQ = void 0;
exports.PAYMENT_SERVICE_RABBITMQ = 'payment-client';
exports.NOTIFICATION_SERVICE_RABBITMQ = 'notification-client';


/***/ }),

/***/ "./apps/order_service/src/order_service.controller.ts":
/*!************************************************************!*\
  !*** ./apps/order_service/src/order_service.controller.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderServiceController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const order_service_service_1 = __webpack_require__(/*! ./order_service.service */ "./apps/order_service/src/order_service.service.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const constants_1 = __webpack_require__(/*! ./constants */ "./apps/order_service/src/constants.ts");
let OrderServiceController = class OrderServiceController {
    orderServiceService;
    paymentClient;
    notificationClient;
    constructor(orderServiceService, paymentClient, notificationClient) {
        this.orderServiceService = orderServiceService;
        this.paymentClient = paymentClient;
        this.notificationClient = notificationClient;
    }
    getHello() {
        return this.orderServiceService.getHello();
    }
    handleOrder(order) {
        console.log('[OrderService]', 'Received order data:', order);
        this.paymentClient.emit('payment-process', order);
        this.notificationClient.emit('notification-sent', order);
    }
};
exports.OrderServiceController = OrderServiceController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], OrderServiceController.prototype, "getHello", null);
__decorate([
    (0, microservices_1.EventPattern)('order-created'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderServiceController.prototype, "handleOrder", null);
exports.OrderServiceController = OrderServiceController = __decorate([
    (0, common_1.Controller)(),
    __param(1, (0, common_1.Inject)(constants_1.PAYMENT_SERVICE_RABBITMQ)),
    __param(2, (0, common_1.Inject)(constants_1.NOTIFICATION_SERVICE_RABBITMQ)),
    __metadata("design:paramtypes", [typeof (_a = typeof order_service_service_1.OrderServiceService !== "undefined" && order_service_service_1.OrderServiceService) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _b : Object, typeof (_c = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _c : Object])
], OrderServiceController);


/***/ }),

/***/ "./apps/order_service/src/order_service.module.ts":
/*!********************************************************!*\
  !*** ./apps/order_service/src/order_service.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderServiceModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const order_service_controller_1 = __webpack_require__(/*! ./order_service.controller */ "./apps/order_service/src/order_service.controller.ts");
const order_service_service_1 = __webpack_require__(/*! ./order_service.service */ "./apps/order_service/src/order_service.service.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const constants_1 = __webpack_require__(/*! ./constants */ "./apps/order_service/src/constants.ts");
let OrderServiceModule = class OrderServiceModule {
};
exports.OrderServiceModule = OrderServiceModule;
exports.OrderServiceModule = OrderServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: constants_1.PAYMENT_SERVICE_RABBITMQ,
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ["amqp://guest:guest@localhost:5672"],
                        queue: 'payment_queue',
                        queueOptions: {
                            durable: true
                        }
                    }
                }
            ]),
            microservices_1.ClientsModule.register([
                {
                    name: constants_1.NOTIFICATION_SERVICE_RABBITMQ,
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ["amqp://guest:guest@localhost:5672"],
                        queue: 'notification_queue',
                        queueOptions: {
                            durable: true
                        }
                    }
                }
            ]),
        ],
        controllers: [order_service_controller_1.OrderServiceController],
        providers: [order_service_service_1.OrderServiceService],
    })
], OrderServiceModule);


/***/ }),

/***/ "./apps/order_service/src/order_service.service.ts":
/*!*********************************************************!*\
  !*** ./apps/order_service/src/order_service.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderServiceService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let OrderServiceService = class OrderServiceService {
    getHello() {
        return 'Hello World!';
    }
};
exports.OrderServiceService = OrderServiceService;
exports.OrderServiceService = OrderServiceService = __decorate([
    (0, common_1.Injectable)()
], OrderServiceService);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!****************************************!*\
  !*** ./apps/order_service/src/main.ts ***!
  \****************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const order_service_module_1 = __webpack_require__(/*! ./order_service.module */ "./apps/order_service/src/order_service.module.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(order_service_module_1.OrderServiceModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: ["amqp://guest:guest@localhost:5672"],
            queue: "order_queue",
            queueOptions: {
                durable: true,
            },
        },
    });
    await app.listen();
    common_1.Logger.log('Order service is running');
}
bootstrap();

})();

/******/ })()
;