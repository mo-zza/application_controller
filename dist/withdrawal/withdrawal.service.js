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
exports.WithdrawalService = void 0;
const common_1 = require("@nestjs/common");
const firestore_service_1 = require("../firestore/firestore.service");
const rabbitmq_service_1 = require("../rabbitmq/rabbitmq.service");
let WithdrawalService = class WithdrawalService {
    constructor(rabbitmq, firebaseAuth) {
        this.rabbitmq = rabbitmq;
        this.firebaseAuth = firebaseAuth;
    }
    async getSellOrderResult(sellQuery) {
        let uid = await this.firebaseAuth.getUserId(sellQuery.user_email);
        let sellOrderInfoQueueBody = await this.rabbitmq.getControllerQueueBody('withdrawal info', sellQuery, uid);
        let queueData = await this.rabbitmq.getQueueData(sellOrderInfoQueueBody);
        return queueData;
    }
    async cancelSellResult(cancelSellQuery) {
        let uid = await this.firebaseAuth.getUserId(cancelSellQuery.user_email);
        let cancelSellQueueBody = await this.rabbitmq.getControllerQueueBody('withdrawal cancel', cancelSellQuery, uid);
        let queueData = await this.rabbitmq.getQueueData(cancelSellQueueBody);
        return queueData;
    }
};
WithdrawalService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [rabbitmq_service_1.RabbitmqService, firestore_service_1.FirestoreService])
], WithdrawalService);
exports.WithdrawalService = WithdrawalService;
//# sourceMappingURL=withdrawal.service.js.map