"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    async setCacheKey(key, value) {
        await this.appService.setCacheKey(key, value);
        return {
            success: true,
            status: 201,
            message: "Key cached successfully"
        };
    }
    async getCacheKey(key) {
        const data = await this.appService.getCacheKey(key);
        return {
            success: true,
            status: 200,
            data
        };
    }
    async deleteCacheKey(key) {
        await this.appService.deleteCacheKey(key);
        return {
            success: true,
            status: 201,
            message: 'Key deleted successfully'
        };
    }
    async resetCache() {
        await this.appService.resetCache();
        return {
            success: true,
            status: 200,
            message: "Cache cleared successfully"
        };
    }
    async cacheStore() {
        const store = await this.appService.cacheKeys();
        return {
            success: true,
            status: 200,
            data: store
        };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Query)('key')),
    __param(1, (0, common_1.Query)('value')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "setCacheKey", null);
__decorate([
    (0, common_1.Get)('get/:key'),
    __param(0, (0, common_1.Param)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getCacheKey", null);
__decorate([
    (0, common_1.Delete)('/:key'),
    __param(0, (0, common_1.Param)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteCacheKey", null);
__decorate([
    (0, common_1.Get)('/reset'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "resetCache", null);
__decorate([
    (0, common_1.Get)('/store'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "cacheStore", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)('cache'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map