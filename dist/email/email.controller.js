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
exports.EmailController = void 0;
const common_1 = require("@nestjs/common");
const email_service_1 = require("./email.service");
const email_dto_1 = require("./dto/email.dto");
const response_service_1 = require("../response/response.service");
const response_dto_1 = require("../response/dto/response.dto");
let EmailController = class EmailController {
    constructor(emailService, responseService) {
        this.emailService = emailService;
        this.responseService = responseService;
    }
    async otpSend(emailForm, res) {
        try {
            let queueData = await this.emailService.sendOtpResult(emailForm);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(common_1.HttpStatus.OK).send({ 'data': JSON.parse(msg.content.toString()) });
                }
            });
        }
        catch (_a) {
            let queueData = await this.emailService.sendOtpResult(emailForm);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData = JSON.parse(msg.content.toString());
                    let errorResponse = this.responseService.getErrorResponse(errorData);
                    res.status(errorResponse.response).send(errorResponse.description);
                }
            });
        }
    }
    async otpChekc(otpQuery, res) {
        try {
            let queueData = await this.emailService.checkOtpResult(otpQuery);
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(common_1.HttpStatus.OK).send({ 'data': JSON.parse(msg.content.toString()) });
                }
            });
        }
        catch (_a) {
            let queueData = await this.emailService.checkOtpResult(otpQuery);
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
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [email_dto_1.EmailSendDto, Object]),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "otpSend", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [email_dto_1.EmailCheckDto, Object]),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "otpChekc", null);
EmailController = __decorate([
    common_1.Controller('email'),
    __metadata("design:paramtypes", [email_service_1.EmailService, response_service_1.ResponseService])
], EmailController);
exports.EmailController = EmailController;
//# sourceMappingURL=email.controller.js.map