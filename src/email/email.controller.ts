import { Body, Controller, Get, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { EmailService } from './email.service';
import { Response } from 'express'
import { EmailCheckDto, EmailSendDto } from './dto/email.dto';
import { ResponseService } from 'src/response/response.service';
import { ErrorInputDto } from 'src/response/dto/response.dto';

@Controller('email')
export class EmailController {
    constructor(private readonly emailService: EmailService, private readonly responseService: ResponseService) {}

    @Post()
    async otpSend(@Body() emailForm: EmailSendDto, @Res() res: Response){
        try {
            let queueData = await this.emailService.sendOtpResult(emailForm)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(HttpStatus.OK).send({ 'data' : JSON.parse(msg.content.toString())})
                }
            })
        } catch {
            let queueData = await this.emailService.sendOtpResult(emailForm)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData: ErrorInputDto = JSON.parse(msg.content.toString())
                    let errorResponse = this.responseService.getErrorResponse(errorData)
                    res.status(errorResponse.response).send(errorResponse.description)
                }
            })
        }
    }

    @Get()
    async otpChekc(@Query() otpQuery: EmailCheckDto, @Res() res: Response) {
        try {
            let queueData = await this.emailService.checkOtpResult(otpQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(HttpStatus.OK).send({ 'data' : JSON.parse(msg.content.toString())})
                }
            })
        } catch {
            let queueData = await this.emailService.checkOtpResult(otpQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData: ErrorInputDto = JSON.parse(msg.content.toString())
                    let errorResponse = this.responseService.getErrorResponse(errorData)
                    res.status(errorResponse.response).send(errorResponse.description)

                }
            })
        }
    }
}
