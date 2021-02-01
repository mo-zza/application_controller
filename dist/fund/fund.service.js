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
exports.FundService = void 0;
const common_1 = require("@nestjs/common");
const firestore_service_1 = require("../firestore/firestore.service");
const rabbitmq_service_1 = require("../rabbitmq/rabbitmq.service");
let FundService = class FundService {
    constructor(rabbitmq, firebaseAuth) {
        this.rabbitmq = rabbitmq;
        this.firebaseAuth = firebaseAuth;
    }
    async moneyFlowHistoryResult(moneyFlowQuery) {
        let moneyFlowQueueBody = await this.rabbitmq.getFundControllerQueueBody('fund money flow history', moneyFlowQuery);
        let queueData = await this.rabbitmq.getQueueData(moneyFlowQueueBody);
        return queueData;
    }
    async priceHistoryResult(priceHistoryQuery) {
        let fundPriceQueueBody = await this.rabbitmq.getFundControllerQueueBody('fund price', priceHistoryQuery);
        let queueData = await this.rabbitmq.getQueueData(fundPriceQueueBody);
        return queueData;
    }
    async rateofReturnHistoryResult(rateofReturnHistoryQuery) {
        let rateOfReturnQueueBody = await this.rabbitmq.getFundControllerQueueBody('fund rate of return history', rateofReturnHistoryQuery);
        let queueData = await this.rabbitmq.getQueueData(rateOfReturnQueueBody);
        return queueData;
    }
    async cumReturnResult(cumReturnQuery) {
        let cumReturnQueueBody = await this.rabbitmq.getFundControllerQueueBody('fund cum return', cumReturnQuery);
        let queueData = await this.rabbitmq.getQueueData(cumReturnQueueBody);
        return queueData;
    }
    async returnHistoryResult(returnHistoryQuery) {
        let returnHistoryQueueBody = await this.rabbitmq.getFundControllerQueueBody('fund return history', returnHistoryQuery);
        let queueData = await this.rabbitmq.getQueueData(returnHistoryQueueBody);
        return queueData;
    }
    async fundingHistoryResult(fundingHistoryQuery) {
        let fundingQueueBody = await this.rabbitmq.getFundControllerQueueBody('fund funding history', fundingHistoryQuery);
        let queueData = await this.rabbitmq.getQueueData(fundingQueueBody);
        return queueData;
    }
    async depositHistoryReuslt(depositHistoryQuery) {
        let fundDepositQueueBody = await this.rabbitmq.getFundControllerQueueBody('fund deposit history', depositHistoryQuery);
        let queueData = await this.rabbitmq.getQueueData(fundDepositQueueBody);
        return queueData;
    }
    async withdrawalHistoryReuslt(wtihdrawalHistoryQuery) {
        let fundWithdrawalQueueBody = await this.rabbitmq.getFundControllerQueueBody('fund withdrawal history', wtihdrawalHistoryQuery);
        let queueData = await this.rabbitmq.getQueueData(fundWithdrawalQueueBody);
        return queueData;
    }
    async pricePercentHistoryResult(pricePercentHistoryQuery) {
        let fundPricePercentQueueBody = await this.rabbitmq.getFundControllerQueueBody('fund price percent history', pricePercentHistoryQuery);
        let queueData = await this.rabbitmq.getQueueData(fundPricePercentQueueBody);
        return queueData;
    }
    async balanceHistoryResult(balanceHistoryQuery) {
        let uid = this.firebaseAuth.getUserId(balanceHistoryQuery.user_email);
        let fundBalanceQueueBody = this.rabbitmq.getControllerQueueBody('fund balance history', balanceHistoryQuery, uid);
        let queueData = await this.rabbitmq.getQueueData(fundBalanceQueueBody);
        return queueData;
    }
    async portChartResult(portChartQuery) {
        let fundPortChartQueueBody = await this.rabbitmq.getFundControllerQueueBody('fund port chart', portChartQuery);
        let queueData = await this.rabbitmq.getQueueData(fundPortChartQueueBody);
        return queueData;
    }
    async fundAssetResult(fundAssetQuery) {
        let fundAssetQueueBody = await this.rabbitmq.getFundControllerQueueBody('fund asset', fundAssetQuery);
        let queueData = await this.rabbitmq.getQueueData(fundAssetQueueBody);
        return queueData;
    }
    async fundReportResult(fundReportQuery) {
        let fundReportQueueBody = await this.rabbitmq.getFundControllerQueueBody('fund report', fundReportQuery);
        let queueData = await this.rabbitmq.getQueueData(fundReportQueueBody);
        return queueData;
    }
};
FundService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [rabbitmq_service_1.RabbitmqService, firestore_service_1.FirestoreService])
], FundService);
exports.FundService = FundService;
//# sourceMappingURL=fund.service.js.map