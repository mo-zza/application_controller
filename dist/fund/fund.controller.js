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
exports.FundController = void 0;
const common_1 = require("@nestjs/common");
const fund_service_1 = require("./fund.service");
const fund_dto_1 = require("./dto/fund.dto");
const response_service_1 = require("../response/response.service");
const response_dto_1 = require("../response/dto/response.dto");
let FundController = class FundController {
    constructor(fundService, responseService) {
        this.fundService = fundService;
        this.responseService = responseService;
    }
    async getMoneyFlowHistory(moneyFlowQuery, res) {
        try {
            let queueData = await this.fundService.moneyFlowHistoryResult(moneyFlowQuery);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(common_1.HttpStatus.OK).send({ 'data': JSON.parse(msg.content.toString()) });
                }
            });
        }
        catch (_a) {
            let queueData = await this.fundService.moneyFlowHistoryResult(moneyFlowQuery);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData = JSON.parse(msg.content.toString());
                    let errorResponse = this.responseService.getErrorResponse(errorData);
                    res.status(errorResponse.response).send(errorResponse.description);
                }
            });
        }
    }
    async getPriceHistory(priceHistoryQuery, res) {
        try {
            let queueData = await this.fundService.priceHistoryResult(priceHistoryQuery);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(common_1.HttpStatus.OK).send({ 'data': JSON.parse(msg.content.toString()) });
                }
            });
        }
        catch (_a) {
            let queueData = await this.fundService.priceHistoryResult(priceHistoryQuery);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData = JSON.parse(msg.content.toString());
                    let errorResponse = this.responseService.getErrorResponse(errorData);
                    res.status(errorResponse.response).send(errorResponse.description);
                }
            });
        }
    }
    async getRateOtReturnHistory(rateOfReturnQuery, res) {
        try {
            let queueData = await this.fundService.rateofReturnHistoryResult(rateOfReturnQuery);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(common_1.HttpStatus.OK).send({ 'data': JSON.parse(msg.content.toString()) });
                }
            });
        }
        catch (_a) {
            let queueData = await this.fundService.rateofReturnHistoryResult(rateOfReturnQuery);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData = JSON.parse(msg.content.toString());
                    let errorResponse = this.responseService.getErrorResponse(errorData);
                    res.status(errorResponse.response).send(errorResponse.description);
                }
            });
        }
    }
    async getCumReturn(cumReturnQuery, res) {
        try {
            let queueData = await this.fundService.cumReturnResult(cumReturnQuery);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(common_1.HttpStatus.OK).send({ 'data': JSON.parse(msg.content.toString()) });
                }
            });
        }
        catch (_a) {
            let queueData = await this.fundService.cumReturnResult(cumReturnQuery);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData = JSON.parse(msg.content.toString());
                    let errorResponse = this.responseService.getErrorResponse(errorData);
                    res.status(errorResponse.response).send(errorResponse.description);
                }
            });
        }
    }
    async getReturnHistory(returnHistoryQuery, res) {
        try {
            let queueData = await this.fundService.returnHistoryResult(returnHistoryQuery);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(common_1.HttpStatus.OK).send({ 'data': JSON.parse(msg.content.toString()) });
                }
            });
        }
        catch (_a) {
            let queueData = await this.fundService.returnHistoryResult(returnHistoryQuery);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData = JSON.parse(msg.content.toString());
                    let errorResponse = this.responseService.getErrorResponse(errorData);
                    res.status(errorResponse.response).send(errorResponse.description);
                }
            });
        }
    }
    async getFundinsHistory(fundingHistoryQuery, res) {
        try {
            let queueData = await this.fundService.fundingHistoryResult(fundingHistoryQuery);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(common_1.HttpStatus.OK).send({ 'data': JSON.parse(msg.content.toString()) });
                }
            });
        }
        catch (_a) {
            let queueData = await this.fundService.fundingHistoryResult(fundingHistoryQuery);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData = JSON.parse(msg.content.toString());
                    let errorResponse = this.responseService.getErrorResponse(errorData);
                    res.status(errorResponse.response).send(errorResponse.description);
                }
            });
        }
    }
    async getDepositHistory(depositHistoryQuery, res) {
        try {
            let queueData = await this.fundService.depositHistoryReuslt(depositHistoryQuery);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(common_1.HttpStatus.OK).send({ 'data': JSON.parse(msg.content.toString()) });
                }
            });
        }
        catch (_a) {
            let queueData = await this.fundService.depositHistoryReuslt(depositHistoryQuery);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData = JSON.parse(msg.content.toString());
                    let errorResponse = this.responseService.getErrorResponse(errorData);
                    res.status(errorResponse.response).send(errorResponse.description);
                }
            });
        }
    }
    async getWithdrawalHistory(withdrawalHisotryQuery, res) {
        try {
            let queueData = await this.fundService.withdrawalHistoryReuslt(withdrawalHisotryQuery);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(common_1.HttpStatus.OK).send({ 'data': JSON.parse(msg.content.toString()) });
                }
            });
        }
        catch (_a) {
            let queueData = await this.fundService.withdrawalHistoryReuslt(withdrawalHisotryQuery);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData = JSON.parse(msg.content.toString());
                    let errorResponse = this.responseService.getErrorResponse(errorData);
                    res.status(errorResponse.response).send(errorResponse.description);
                }
            });
        }
    }
    async getPricePercentHistory(pricePercentHistoryQuery, res) {
        try {
            let queueData = await this.fundService.pricePercentHistoryResult(pricePercentHistoryQuery);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(common_1.HttpStatus.OK).send({ 'data': JSON.parse(msg.content.toString()) });
                }
            });
        }
        catch (_a) {
            let queueData = await this.fundService.pricePercentHistoryResult(pricePercentHistoryQuery);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData = JSON.parse(msg.content.toString());
                    let errorResponse = this.responseService.getErrorResponse(errorData);
                    res.status(errorResponse.response).send(errorResponse.description);
                }
            });
        }
    }
    async getBalanceHistory(balanceHistoryQuery, res) {
        try {
            let queueData = await this.fundService.balanceHistoryResult(balanceHistoryQuery);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(common_1.HttpStatus.OK).send({ 'data': JSON.parse(msg.content.toString()) });
                }
            });
        }
        catch (_a) {
            let queueData = await this.fundService.balanceHistoryResult(balanceHistoryQuery);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData = JSON.parse(msg.content.toString());
                    let errorResponse = this.responseService.getErrorResponse(errorData);
                    res.status(errorResponse.response).send(errorResponse.description);
                }
            });
        }
    }
    async getPortChart(portChartQuery, res) {
        try {
            let queueData = await this.fundService.portChartResult(portChartQuery);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(common_1.HttpStatus.OK).send({ 'data': JSON.parse(msg.content.toString()) });
                }
            });
        }
        catch (_a) {
            let queueData = await this.fundService.portChartResult(portChartQuery);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData = JSON.parse(msg.content.toString());
                    let errorResponse = this.responseService.getErrorResponse(errorData);
                    res.status(errorResponse.response).send(errorResponse.description);
                }
            });
        }
    }
    async getFundAsset(fundAssetQuery, res) {
        try {
            let queueData = await this.fundService.fundAssetResult(fundAssetQuery);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(common_1.HttpStatus.OK).send({ 'data': JSON.parse(msg.content.toString()) });
                }
            });
        }
        catch (_a) {
            let queueData = await this.fundService.fundAssetResult(fundAssetQuery);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData = JSON.parse(msg.content.toString());
                    let errorResponse = this.responseService.getErrorResponse(errorData);
                    res.status(errorResponse.response).send(errorResponse.description);
                }
            });
        }
    }
    async getFundReport(fundReportQuery, res) {
        try {
            let queueData = await this.fundService.fundReportResult(fundReportQuery);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(common_1.HttpStatus.OK).send({ 'data': JSON.parse(msg.content.toString()) });
                }
            });
        }
        catch (_a) {
            let queueData = await this.fundService.fundReportResult(fundReportQuery);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData = JSON.parse(msg.content.toString());
                    let errorResponse = this.responseService.getErrorResponse(errorData);
                    res.status(errorResponse.response).send(errorResponse.description);
                }
            });
        }
    }
};
__decorate([
    common_1.Get('MoneyFlowHistory'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fund_dto_1.MoneyFlowHisotryDto, Object]),
    __metadata("design:returntype", Promise)
], FundController.prototype, "getMoneyFlowHistory", null);
__decorate([
    common_1.Get('priceHistory'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fund_dto_1.FundDefaultDto, Object]),
    __metadata("design:returntype", Promise)
], FundController.prototype, "getPriceHistory", null);
__decorate([
    common_1.Get('RateofReturnHistory'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fund_dto_1.FundDefaultDto, Object]),
    __metadata("design:returntype", Promise)
], FundController.prototype, "getRateOtReturnHistory", null);
__decorate([
    common_1.Get('cumReturn'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fund_dto_1.FundCumReturnDto, Object]),
    __metadata("design:returntype", Promise)
], FundController.prototype, "getCumReturn", null);
__decorate([
    common_1.Get('returnHistory'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fund_dto_1.FundDefaultDto, Object]),
    __metadata("design:returntype", Promise)
], FundController.prototype, "getReturnHistory", null);
__decorate([
    common_1.Get('fundingHistory'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fund_dto_1.FundDefaultDto, Object]),
    __metadata("design:returntype", Promise)
], FundController.prototype, "getFundinsHistory", null);
__decorate([
    common_1.Get('depositHistory'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fund_dto_1.FundDefaultDto, Object]),
    __metadata("design:returntype", Promise)
], FundController.prototype, "getDepositHistory", null);
__decorate([
    common_1.Get('withdrawalHistory'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fund_dto_1.FundDefaultDto, Object]),
    __metadata("design:returntype", Promise)
], FundController.prototype, "getWithdrawalHistory", null);
__decorate([
    common_1.Get('pricePercentHistory'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fund_dto_1.FundDefaultDto, Object]),
    __metadata("design:returntype", Promise)
], FundController.prototype, "getPricePercentHistory", null);
__decorate([
    common_1.Get('balanceHistory'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fund_dto_1.FundBalanceDto, Object]),
    __metadata("design:returntype", Promise)
], FundController.prototype, "getBalanceHistory", null);
__decorate([
    common_1.Get('portChart'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fund_dto_1.FundSimpleDto, Object]),
    __metadata("design:returntype", Promise)
], FundController.prototype, "getPortChart", null);
__decorate([
    common_1.Get('asset'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fund_dto_1.FundSimpleDto, Object]),
    __metadata("design:returntype", Promise)
], FundController.prototype, "getFundAsset", null);
__decorate([
    common_1.Get('report'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fund_dto_1.FundSimpleDto, Object]),
    __metadata("design:returntype", Promise)
], FundController.prototype, "getFundReport", null);
FundController = __decorate([
    common_1.Controller('fund'),
    __metadata("design:paramtypes", [fund_service_1.FundService, response_service_1.ResponseService])
], FundController);
exports.FundController = FundController;
//# sourceMappingURL=fund.controller.js.map