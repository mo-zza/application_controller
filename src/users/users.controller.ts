import { Body, Controller, Get, HttpCode, HttpStatus, Post, Put, Query, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express'
import { ChangeNickNamedto, ChangeNoticeDto, ChangePasswordDto, CreateUserDto, GetSimpleDto, LoginDto } from './dto/user.dto';
import { ResponseService } from 'src/response/response.service';
import { ResponseInputDto } from 'src/response/dto/response.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService, private readonly responseService: ResponseService) {}

    @Get('login')
    async login(@Query() loginQuery: LoginDto, @Res() res: Response) {
        let queueData = await this.usersService.loginResult(loginQuery)
        queueData.channel.consume(queueData.queue.queue, (msg) => {
            if (queueData.correlationdId == msg.properties.correlationId) {
                let jsonData = JSON.parse(msg.content.toString())
                let responseInput: ResponseInputDto = jsonData
                let response = this.responseService.getResponse(responseInput)
                res.status(HttpStatus.OK).send(response)
            }
        })
    }

    @Post()
    async user(@Body() createForm: CreateUserDto, @Res() res: Response) {
        let queueData = await this.usersService.createUserResult(createForm)
        queueData.channel.consume(queueData.queue.queue, (msg) => {
            if (queueData.correlationdId == msg.properties.correlationId) {
                let jsonData = JSON.parse(msg.content.toString())
                let responseInput: ResponseInputDto = jsonData
                let response = this.responseService.getResponse(responseInput)
                res.status(HttpStatus.OK).send(response)
            }
        })
    }

    @Put('password')
    async userPassword(@Body() updatePasswordForm: ChangePasswordDto, @Res() res: Response) {
        let queueData = await this.usersService.changePasswordResult(updatePasswordForm)
        queueData.channel.consume(queueData.queue.queue, (msg) => {
            if (queueData.correlationdId == msg.properties.correlationId) {
                let jsonData = JSON.parse(msg.content.toString())
                let responseInput: ResponseInputDto = jsonData
                let response = this.responseService.getResponse(responseInput)
                res.status(HttpStatus.OK).send(response)
            }
        })
    }

    @Get('password')
    async userPasswrod(@Query() userSimpleQuery: GetSimpleDto, @Res() res: Response) {
        let queueData = await this.usersService.getPasswordResult(userSimpleQuery)
        queueData.channel.consume(queueData.queue.queue, (msg) => {
            if (queueData.correlationdId == msg.properties.correlationId) {
                let jsonData = JSON.parse(msg.content.toString())
                let responseInput: ResponseInputDto = jsonData
                let response = this.responseService.getResponse(responseInput)
                res.status(HttpStatus.OK).send(response)
            }
        })
    }

    @Get('assets')
    async userAsset(@Query() userSimpleQuery: GetSimpleDto, @Res() res: Response) {
        let queueData = await this.usersService.getAssetResult(userSimpleQuery)
        queueData.channel.consume(queueData.queue.queue, (msg) => {
            if (queueData.correlationdId == msg.properties.correlationId) {
                let jsonData = JSON.parse(msg.content.toString())
                let responseInput: ResponseInputDto = jsonData
                let response = this.responseService.getResponse(responseInput)
                res.status(HttpStatus.OK).send(response)
            }
        })
    }

    @Get('history')
    async userHistory(@Query() userSimpleQuery: GetSimpleDto, @Res() res: Response) {
        let queueData = await this.usersService.getUserHistoryResult(userSimpleQuery)
        queueData.channel.consume(queueData.queue.queue, (msg) => {
            if (queueData.correlationdId == msg.properties.correlationId) {
                let jsonData = JSON.parse(msg.content.toString())
                let responseInput: ResponseInputDto = jsonData
                let response = this.responseService.getResponse(responseInput)
                res.status(HttpStatus.OK).send(response)
            }
        })
    }

    @Get('chart')
    async userChart(@Query() userSimpleQuery: GetSimpleDto, @Res() res: Response) {
        let queueData = await this.usersService.getUserChartResult(userSimpleQuery)
        queueData.channel.consume(queueData.queue.queue, (msg) => {
            if (queueData.correlationdId == msg.properties.correlationId) {
                let jsonData = JSON.parse(msg.content.toString())
                let responseInput: ResponseInputDto = jsonData
                let response = this.responseService.getResponse(responseInput)
                res.status(HttpStatus.OK).send(response)
            }
        })
    }

    @Put('notice')
    async noticeSetting(@Body() changeNoticeForm: ChangeNoticeDto, @Res() res: Response) {
        let queueData = await this.usersService.changeNoticeResult(changeNoticeForm)
        queueData.channel.consume(queueData.queue.queue, (msg) => {
            if (queueData.correlationdId == msg.properties.correlationId) {
                let jsonData = JSON.parse(msg.content.toString())
                let responseInput: ResponseInputDto = jsonData
                let response = this.responseService.getResponse(responseInput)
                res.status(HttpStatus.OK).send(response)
            }
        })
    }

    @Get('notice/list')
    async noticeList(@Query() userSimpleQuery: GetSimpleDto, @Res() res: Response) {
        let queueData = await this.usersService.getNoticeListResult(userSimpleQuery)
        queueData.channel.consume(queueData.queue.queue, (msg) => {
            if (queueData.correlationdId == msg.properties.correlationId) {
                let jsonData = JSON.parse(msg.content.toString())
                let responseInput: ResponseInputDto = jsonData
                let response = this.responseService.getResponse(responseInput)
                res.status(HttpStatus.OK).send(response)
            }
        })
    }

    @Put('nickName')
    async nickName(@Body() changeNickNameForm: ChangeNickNamedto, @Res() res: Response) {
        let queueData = await this.usersService.changeNickNameResult(changeNickNameForm)
        queueData.channel.consume(queueData.queue.queue, (msg) => {
            if (queueData.correlationdId == msg.properties.correlationId) {
                let jsonData = JSON.parse(msg.content.toString())
                let responseInput: ResponseInputDto = jsonData
                let response = this.responseService.getResponse(responseInput)
                res.status(HttpStatus.OK).send(response)
            }
        })
    }
}
