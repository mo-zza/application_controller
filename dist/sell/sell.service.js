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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellService = void 0;
const common_1 = require("@nestjs/common");
const firestore_service_1 = require("../firestore/firestore.service");
const rabbitmq_service_1 = require("../rabbitmq/rabbitmq.service");
let SellService = class SellService {
    constructor(rabbitmq, firebaseauth) {
        this.rabbitmq = rabbitmq;
        this.firebaseauth = firebaseauth;
    }
    async orderSellResult(sellForm) {
        let uid = await this.firebaseauth.getUserId(sellForm.user_email);
        let orderSellQueueBody = await this.rabbitmq.getControllerQueueBody('sell order', sellForm, uid);
        let queueData = await this.rabbitmq.getQueueData(orderSellQueueBody);
        return queueData;
    }
};
SellService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [rabbitmq_service_1.RabbitmqService, firestore_service_1.FirestoreService])
], SellService);
exports.SellService = SellService;
//# sourceMappingURL=sell.service.js.map