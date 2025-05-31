/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/payment-service/src/constants.ts":
/*!***********************************************!*\
  !*** ./apps/payment-service/src/constants.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NOTIFICATION_SERVICE_RABBITMQ = exports.PAYMENT_SERVICE_RABBITMQ = void 0;
exports.PAYMENT_SERVICE_RABBITMQ = 'payment-client';
exports.NOTIFICATION_SERVICE_RABBITMQ = 'notification-client';


/***/ }),

/***/ "./apps/payment-service/src/payment-service.controller.ts":
/*!****************************************************************!*\
  !*** ./apps/payment-service/src/payment-service.controller.ts ***!
  \****************************************************************/
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaymentServiceController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const payment_service_service_1 = __webpack_require__(/*! ./payment-service.service */ "./apps/payment-service/src/payment-service.service.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const constants_1 = __webpack_require__(/*! ./constants */ "./apps/payment-service/src/constants.ts");
let PaymentServiceController = class PaymentServiceController {
    paymentServiceService;
    notificationClient;
    constructor(paymentServiceService, notificationClient) {
        this.paymentServiceService = paymentServiceService;
        this.notificationClient = notificationClient;
    }
    getHello() {
        return this.paymentServiceService.getHello();
    }
    paymentProcess(order) {
        console.log('Payment service received order', order);
        this.notificationClient.emit('successful-payment', order);
    }
};
exports.PaymentServiceController = PaymentServiceController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], PaymentServiceController.prototype, "getHello", null);
__decorate([
    (0, microservices_1.EventPattern)('payment-process'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaymentServiceController.prototype, "paymentProcess", null);
exports.PaymentServiceController = PaymentServiceController = __decorate([
    (0, common_1.Controller)(),
    __param(1, (0, common_1.Inject)(constants_1.NOTIFICATION_SERVICE_RABBITMQ)),
    __metadata("design:paramtypes", [typeof (_a = typeof payment_service_service_1.PaymentServiceService !== "undefined" && payment_service_service_1.PaymentServiceService) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _b : Object])
], PaymentServiceController);


/***/ }),

/***/ "./apps/payment-service/src/payment-service.module.ts":
/*!************************************************************!*\
  !*** ./apps/payment-service/src/payment-service.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaymentServiceModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const payment_service_controller_1 = __webpack_require__(/*! ./payment-service.controller */ "./apps/payment-service/src/payment-service.controller.ts");
const payment_service_service_1 = __webpack_require__(/*! ./payment-service.service */ "./apps/payment-service/src/payment-service.service.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const constants_1 = __webpack_require__(/*! ./constants */ "./apps/payment-service/src/constants.ts");
let PaymentServiceModule = class PaymentServiceModule {
};
exports.PaymentServiceModule = PaymentServiceModule;
exports.PaymentServiceModule = PaymentServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [
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
        controllers: [payment_service_controller_1.PaymentServiceController],
        providers: [payment_service_service_1.PaymentServiceService],
    })
], PaymentServiceModule);


/***/ }),

/***/ "./apps/payment-service/src/payment-service.service.ts":
/*!*************************************************************!*\
  !*** ./apps/payment-service/src/payment-service.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaymentServiceService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let PaymentServiceService = class PaymentServiceService {
    getHello() {
        return 'Hello World!';
    }
};
exports.PaymentServiceService = PaymentServiceService;
exports.PaymentServiceService = PaymentServiceService = __decorate([
    (0, common_1.Injectable)()
], PaymentServiceService);


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
/*!******************************************!*\
  !*** ./apps/payment-service/src/main.ts ***!
  \******************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const payment_service_module_1 = __webpack_require__(/*! ./payment-service.module */ "./apps/payment-service/src/payment-service.module.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(payment_service_module_1.PaymentServiceModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: ["amqp://guest:guest@localhost:5672"],
            queue: "payment_queue",
            queueOptions: {
                durable: true,
            },
        },
    });
    await app.listen();
    common_1.Logger.log('Payment service is running');
}
bootstrap();

})();

/******/ })()
;