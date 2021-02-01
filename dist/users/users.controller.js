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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const user_dto_1 = require("./dto/user.dto");
const response_service_1 = require("../response/response.service");
const response_dto_1 = require("../response/dto/response.dto");
let UsersController = class UsersController {
    constructor(usersService, responseService) {
        this.usersService = usersService;
        this.responseService = responseService;
    }
    async login(loginQuery) {
        let queueData = await this.usersService.loginResult(loginQuery);
        queueData.channel.consume(queueData.queue.queue, (msg) => {
            if (queueData.correlationdId == msg.properties.correlationId) {
                let jsonData = JSON.parse(msg.content.toString());
                let responseInput = jsonData;
                return this.responseService.getResponse(responseInput);
            }
        });
    }
    async user(createForm, res) {
        let queueData = await this.usersService.createUserResult(createForm);
        queueData.channel.consume(queueData.queue.queue, (msg) => {
            if (queueData.correlationdId == msg.properties.correlationId) {
                let jsonData = JSON.parse(msg.content.toString());
                let responseInput = jsonData;
                let response = this.responseService.getResponse(responseInput);
                res.status(common_1.HttpStatus.OK).send(response);
            }
        });
    }
    async userPassword(updatePasswordForm, res) {
        let queueData = await this.usersService.changePasswordResult(updatePasswordForm);
        queueData.channel.consume(queueData.queue.queue, (msg) => {
            if (queueData.correlationdId == msg.properties.correlationId) {
                let jsonData = JSON.parse(msg.content.toString());
                let responseInput = jsonData;
                let response = this.responseService.getResponse(responseInput);
                res.status(common_1.HttpStatus.OK).send(response);
            }
        });
    }
    async userPasswrod(userSimpleQuery, res) {
        let queueData = await this.usersService.getPasswordResult(userSimpleQuery);
        queueData.channel.consume(queueData.queue.queue, (msg) => {
            if (queueData.correlationdId == msg.properties.correlationId) {
                let jsonData = JSON.parse(msg.content.toString());
                let responseInput = jsonData;
                let response = this.responseService.getResponse(responseInput);
                res.status(common_1.HttpStatus.OK).send(response);
            }
        });
    }
    async userAsset(userSimpleQuery, res) {
        let queueData = await this.usersService.getAssetResult(userSimpleQuery);
        queueData.channel.consume(queueData.queue.queue, (msg) => {
            if (queueData.correlationdId == msg.properties.correlationId) {
                let jsonData = JSON.parse(msg.content.toString());
                let responseInput = jsonData;
                let response = this.responseService.getResponse(responseInput);
                res.status(common_1.HttpStatus.OK).send(response);
            }
        });
    }
    async userHistory(userSimpleQuery, res) {
        let queueData = await this.usersService.getUserHistoryResult(userSimpleQuery);
        queueData.channel.consume(queueData.queue.queue, (msg) => {
            if (queueData.correlationdId == msg.properties.correlationId) {
                let jsonData = JSON.parse(msg.content.toString());
                let responseInput = jsonData;
                let response = this.responseService.getResponse(responseInput);
                res.status(common_1.HttpStatus.OK).send(response);
            }
        });
    }
    async userChart(userSimpleQuery, res) {
        let queueData = await this.usersService.getUserChartResult(userSimpleQuery);
        queueData.channel.consume(queueData.queue.queue, (msg) => {
            if (queueData.correlationdId == msg.properties.correlationId) {
                let jsonData = JSON.parse(msg.content.toString());
                let responseInput = jsonData;
                let response = this.responseService.getResponse(responseInput);
                res.status(common_1.HttpStatus.OK).send(response);
            }
        });
    }
    async noticeSetting(changeNoticeForm, res) {
        let queueData = await this.usersService.changeNoticeResult(changeNoticeForm);
        queueData.channel.consume(queueData.queue.queue, (msg) => {
            if (queueData.correlationdId == msg.properties.correlationId) {
                let jsonData = JSON.parse(msg.content.toString());
                let responseInput = jsonData;
                let response = this.responseService.getResponse(responseInput);
                res.status(common_1.HttpStatus.OK).send(response);
            }
        });
    }
    async noticeList(userSimpleQuery, res) {
        let queueData = await this.usersService.getNoticeListResult(userSimpleQuery);
        queueData.channel.consume(queueData.queue.queue, (msg) => {
            if (queueData.correlationdId == msg.properties.correlationId) {
                let jsonData = JSON.parse(msg.content.toString());
                let responseInput = jsonData;
                let response = this.responseService.getResponse(responseInput);
                res.status(common_1.HttpStatus.OK).send(response);
            }
        });
    }
    async nickName(changeNickNameForm, res) {
        let queueData = await this.usersService.changeNickNameResult(changeNickNameForm);
        queueData.channel.consume(queueData.queue.queue, (msg) => {
            if (queueData.correlationdId == msg.properties.correlationId) {
                let jsonData = JSON.parse(msg.content.toString());
                let responseInput = jsonData;
                let response = this.responseService.getResponse(responseInput);
                res.status(common_1.HttpStatus.OK).send(response);
            }
        });
    }
};
__decorate([
    common_1.Get('login'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "login", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "user", null);
__decorate([
    common_1.Put('password'),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.ChangePasswordDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "userPassword", null);
__decorate([
    common_1.Get('password'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.GetSimpleDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "userPasswrod", null);
__decorate([
    common_1.Get('assets'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.GetSimpleDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "userAsset", null);
__decorate([
    common_1.Get('history'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.GetSimpleDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "userHistory", null);
__decorate([
    common_1.Get('chart'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.GetSimpleDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "userChart", null);
__decorate([
    common_1.Put('notice'),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.ChangeNoticeDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "noticeSetting", null);
__decorate([
    common_1.Get('notice/list'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.GetSimpleDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "noticeList", null);
__decorate([
    common_1.Put('nickName'),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.ChangeNickNamedto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "nickName", null);
UsersController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService, response_service_1.ResponseService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map