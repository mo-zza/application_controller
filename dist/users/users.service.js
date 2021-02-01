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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const firestore_service_1 = require("../firestore/firestore.service");
const rabbitmq_service_1 = require("../rabbitmq/rabbitmq.service");
const response_dto_1 = require("../response/dto/response.dto");
const response_service_1 = require("../response/response.service");
let UsersService = class UsersService {
    constructor(rabbitmq, firebaseAuth) {
        this.rabbitmq = rabbitmq;
        this.firebaseAuth = firebaseAuth;
    }
    async loginResult(loginForm) {
        let uid = await this.firebaseAuth.getUserId(loginForm.user_email);
        let loginQueueBody = await this.rabbitmq.getControllerQueueBody('user login', loginForm, uid);
        let queueData = await this.rabbitmq.getQueueData(loginQueueBody);
        return queueData;
    }
    async createUserResult(createUserForm) {
        let uid = await this.firebaseAuth.getUserId(createUserForm.user_email);
        let createUserQueueBody = await this.rabbitmq.getControllerQueueBody('user craete', createUserForm, uid);
        let queueData = await this.rabbitmq.getQueueData(createUserQueueBody);
        return queueData;
    }
    async changePasswordResult(passwordForm) {
        let uid = await this.firebaseAuth.getUserId(passwordForm.user_email);
        let changePasswordQueueBody = await this.rabbitmq.getControllerQueueBody('user change password', passwordForm, uid);
        let queueData = await this.rabbitmq.getQueueData(changePasswordQueueBody);
        return queueData;
    }
    async getPasswordResult(userSimpleQuerys) {
        let uid = await this.firebaseAuth.getUserId(userSimpleQuerys.user_email);
        let passwordQueueBody = await this.rabbitmq.getControllerQueueBody('user get password', userSimpleQuerys, uid);
        let queueData = await this.rabbitmq.getQueueData(passwordQueueBody);
        return queueData;
    }
    async getAssetResult(userSimpleQuerys) {
        let uid = await this.firebaseAuth.getUserId(userSimpleQuerys.user_email);
        let assetQueueBody = await this.rabbitmq.getControllerQueueBody('user asset', userSimpleQuerys, uid);
        let queueData = await this.rabbitmq.getQueueData(assetQueueBody);
        return queueData;
    }
    async getUserHistoryResult(userSimpleQuerys) {
        let uid = await this.firebaseAuth.getUserId(userSimpleQuerys.user_email);
        let userHistoryQueueBody = await this.rabbitmq.getControllerQueueBody('user history', userSimpleQuerys, uid);
        let queueData = await this.rabbitmq.getQueueData(userHistoryQueueBody);
        return queueData;
    }
    async getUserChartResult(userSimpleQuerys) {
        let uid = await this.firebaseAuth.getUserId(userSimpleQuerys.user_email);
        let userChartQueueBody = await this.rabbitmq.getControllerQueueBody('user chart', userSimpleQuerys, uid);
        let queueData = await this.rabbitmq.getQueueData(userChartQueueBody);
        return queueData;
    }
    async changeNoticeResult(changeNoticeForm) {
        let uid = await this.firebaseAuth.getUserId(changeNoticeForm.user_email);
        let changeNoticeQueueBody = await this.rabbitmq.getControllerQueueBody('user notice setting', changeNoticeForm, uid);
        let queueData = await this.rabbitmq.getQueueData(changeNoticeQueueBody);
        return queueData;
    }
    async getNoticeListResult(userSimpleQuerys) {
        let uid = this.firebaseAuth.getUserId(userSimpleQuerys.user_email);
        let noticeListQueueBody = this.rabbitmq.getControllerQueueBody('user notice list', userSimpleQuerys, uid);
        let queueData = await this.rabbitmq.getQueueData(noticeListQueueBody);
        return queueData;
    }
    async changeNickNameResult(changeNickNameForm) {
        let uid = await this.firebaseAuth.getUserId(changeNickNameForm.user_email);
        let nickNameQueueBody = await this.rabbitmq.getControllerQueueBody('user update nick name', changeNickNameForm, uid);
        let queueData = await this.rabbitmq.getQueueData(nickNameQueueBody);
        return queueData;
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [rabbitmq_service_1.RabbitmqService, firestore_service_1.FirestoreService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map