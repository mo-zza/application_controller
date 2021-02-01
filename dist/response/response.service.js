"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseService = void 0;
const common_1 = require("@nestjs/common");
let ResponseService = class ResponseService {
    getErrorResponse(errorInputDto) {
        if (errorInputDto.error === 'CustomNotFound') {
            let response = { response: 404, description: errorInputDto.description };
            return response;
        }
        else if (errorInputDto.error === 'UnAuthenticationError') {
            let response = { response: 401, description: errorInputDto.description };
            return response;
        }
        else if (errorInputDto.error === 'ServerError') {
            let response = { response: 500, description: errorInputDto.description };
            return response;
        }
        else if (errorInputDto.error === 'VerifyTokenError') {
            let response = { response: 401, description: errorInputDto.description };
            return response;
        }
        else if (errorInputDto.error === 'UnFinishOrder') {
            let response = { response: 500, description: errorInputDto.description };
            return response;
        }
        else if (errorInputDto.error === 'ZeroBalance') {
            throw new common_1.UnauthorizedException(errorInputDto.description);
        }
        else if (errorInputDto.error === 'LockedUser') {
            let response = { response: 401, description: errorInputDto.description };
            return response;
        }
        else if (errorInputDto.error === 'VerifyPassword') {
            throw new common_1.HttpException({ status: common_1.HttpStatus.UNAUTHORIZED, error: errorInputDto.description }, common_1.HttpStatus.UNAUTHORIZED);
        }
        else if (errorInputDto.error === 'ZeroFundAsset') {
            let response = { response: 403, description: errorInputDto.description };
            return response;
        }
        else if (errorInputDto.error === 'ZeroFunding') {
            let response = { response: 403, description: errorInputDto.description };
            return response;
        }
        else if (errorInputDto.error === 'ZeroRecord') {
            let response = { response: 403, description: errorInputDto.description };
            return response;
        }
        else if (errorInputDto.error === 'ZeroAsset') {
            let response = { response: 404, description: errorInputDto.description };
            return response;
        }
        else if (errorInputDto.error === 'VerifyOTP') {
            let response = { response: 401, description: errorInputDto.description };
            return response;
        }
        else if (errorInputDto.error === 'NotFound') {
            let response = { response: 404, description: errorInputDto.description };
            return response;
        }
        else if (errorInputDto.error === 'InsuffiientError') {
            let response = { response: 400, description: errorInputDto.description };
            return response;
        }
        else if (errorInputDto.error === 'ZeroDBCustom') {
            let response = { response: 200, description: errorInputDto.description };
            return response;
        }
        else if (errorInputDto.error === 'AlreadyUser') {
            let response = { response: 403, description: errorInputDto.description };
            return response;
        }
        else if (errorInputDto.error === 'NonAvailableAccount') {
            let response = { response: 500, description: errorInputDto.description };
            return response;
        }
        else {
            let response = { response: 500, description: errorInputDto.description };
            return response;
        }
    }
    getResponse(responseData) {
        let messageData = responseData.response;
        if (messageData.hasOwnProperty('error')) {
            let errorInput = messageData;
            this.getErrorResponse(errorInput);
        }
        else {
            let successOutput = { 'data': messageData };
            return successOutput;
        }
    }
};
ResponseService = __decorate([
    common_1.Injectable()
], ResponseService);
exports.ResponseService = ResponseService;
//# sourceMappingURL=response.service.js.map