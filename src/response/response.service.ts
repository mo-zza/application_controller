import { HttpCode, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { throwError } from 'rxjs';
import { ErrorInputDto, ResponseInputDto, SuccessOutputDto } from './dto/response.dto'

@Injectable()
export class ResponseService {

    getErrorResponse(errorInputDto: ErrorInputDto) {
        if (errorInputDto.error === 'CustomNotFound') {
            let response = {response : 404, description: errorInputDto.description}
            return response
        } else if (errorInputDto.error === 'UnAuthenticationError') {
            let response = {response : 401, description: errorInputDto.description}
            return response
        } else if (errorInputDto.error === 'ServerError') {
            let response = {response : 500, description: errorInputDto.description}
            return response
        } else if (errorInputDto.error === 'VerifyTokenError') {
            let response = {response : 401, description: errorInputDto.description}
            return response
        } else if (errorInputDto.error === 'UnFinishOrder') {
            let response = {response : 500, description: errorInputDto.description}
            return response
        } else if (errorInputDto.error === 'ZeroBalance') {
            // let response = {response : 403, description: errorInputDto.description}
            throw new UnauthorizedException(errorInputDto.description);
            // return response
        } else if (errorInputDto.error === 'LockedUser') {
            let response = {response : 401, description: errorInputDto.description}
            return response
        } else if (errorInputDto.error === 'VerifyPassword') {
            // let response = {response : 401, description: errorInputDto.description}
            // return response
            throw new HttpException({status: HttpStatus.UNAUTHORIZED, error: errorInputDto.description},HttpStatus.UNAUTHORIZED)
        } else if (errorInputDto.error === 'ZeroFundAsset') {
            let response = {response : 403, description: errorInputDto.description}
            return response
        } else if (errorInputDto.error === 'ZeroFunding') {
            let response = {response : 403, description: errorInputDto.description}
            return response
        } else if (errorInputDto.error === 'ZeroRecord') {
            let response = {response : 403, description: errorInputDto.description}
            return response
        } else if (errorInputDto.error === 'ZeroAsset') {
            let response = {response : 404, description: errorInputDto.description}
            return response
        } else if (errorInputDto.error === 'VerifyOTP') {
            let response = {response : 401, description: errorInputDto.description}
            return response
        } else if (errorInputDto.error === 'NotFound') {
            let response = {response : 404, description: errorInputDto.description}
            return response
        } else if (errorInputDto.error === 'InsuffiientError') {
            let response = {response : 400, description: errorInputDto.description}
            return response
        } else if (errorInputDto.error === 'ZeroDBCustom') {
            let response = {response : 200, description: errorInputDto.description}
            return response
        } else if (errorInputDto.error === 'AlreadyUser') {
            let response = {response : 403, description: errorInputDto.description}
            return response
        } else if (errorInputDto.error === 'NonAvailableAccount') {
            let response = {response : 500, description: errorInputDto.description}
            return response
        } else {
            let response = {response : 500, description: errorInputDto.description}
            return response
        }
    }

    getResponse(responseData: ResponseInputDto) {
        let messageData = responseData.response
        if (messageData.hasOwnProperty('error')) {
            let errorInput: ErrorInputDto = messageData
            this.getErrorResponse(errorInput)
        } else {
            let successOutput = {'data':messageData}
            return successOutput
        }
    }
}