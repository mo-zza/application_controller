import { Controller, Delete, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { WithdrawalService } from './withdrawal.service';
import { Response } from 'express'
import { WithdrawalDto } from './dto/withdrawal.dto';
import { ResponseService } from 'src/response/response.service';
import { ErrorInputDto } from 'src/response/dto/response.dto';

@Controller('withdrawal')
export class WithdrawalController {
    constructor(private readonly withdrawalService: WithdrawalService, private readonly responseService: ResponseService) {}

    @Get()
    async getSellOrder(@Query() sellQuery: WithdrawalDto, @Res() res: Response){
        let queueData = await this.withdrawalService.getSellOrderResult(sellQuery)
        queueData.channel.consume(queueData.queue.queue, (msg) => {
            if (queueData.correlationdId == msg.properties.correlationId) {
                let jsonData = JSON.parse(msg.content.toString())
                if (jsonData.hasOwnProperty('exception_name')) {
                    let errorData: ErrorInputDto = jsonData
                    let errorResponse = this.responseService.getErrorResponse(errorData)
                    res.send(errorResponse.response).send(errorResponse.description)
                } else {
                    res.status(HttpStatus.OK).send({ 'data' : JSON.parse(msg.content.toString())})   
                }
            }
        })
    }

    @Delete('status')
    async cancelWithdrwal(@Query() cancelSellQuery: WithdrawalDto, @Res() res: Response) {
        try {
            let queueData = await this.withdrawalService.cancelSellResult(cancelSellQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(HttpStatus.OK).send({ 'data' : JSON.parse(msg.content.toString())})
                }
            })
        } catch {
            let queueData = await this.withdrawalService.cancelSellResult(cancelSellQuery)
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
