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
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const firestore_service_1 = require("../firestore/firestore.service");
const rabbitmq_service_1 = require("../rabbitmq/rabbitmq.service");
let EmailService = class EmailService {
    constructor(rabbitmq, firebaseAuth) {
        this.rabbitmq = rabbitmq;
        this.firebaseAuth = firebaseAuth;
    }
    async sendOtpResult(emailForm) {
        let uid = await this.firebaseAuth.getUserId(emailForm.user_email);
        let emailQueueBody = await this.rabbitmq.getControllerQueueBody('email send', emailForm, uid);
        let queueData = await this.rabbitmq.getQueueData(emailQueueBody);
        return queueData;
    }
    async checkOtpResult(otpQuery) {
        let uid = await this.firebaseAuth.getUserId(otpQuery.user_email);
        let checkOtpQueueBody = await this.rabbitmq.getControllerQueueBody('email otp check', otpQuery, uid);
        let queueData = await this.rabbitmq.getQueueData(checkOtpQueueBody);
        return queueData;
    }
};
EmailService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [rabbitmq_service_1.RabbitmqService, firestore_service_1.FirestoreService])
], EmailService);
exports.EmailService = EmailService;
//# sourceMappingURL=email.service.js.map