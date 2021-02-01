import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { SellService } from './sell.service';
import { Response } from 'express'
import { SellDto } from './dto/sell.dto';
import { ResponseService } from 'src/response/response.service';
import { ErrorInputDto } from 'src/response/dto/response.dto';

@Controller('sell')
export class SellController {
    constructor(private readonly sellService: SellService, private readonly responseService: ResponseService) {}

    @Post()
    async orderSell(@Body() sellForm: SellDto, @Res() res: Response) {
        try {
            let queueData = await this.sellService.orderSellResult(sellForm)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(HttpStatus.OK).send({ 'data' : JSON.parse(msg.content.toString())})
                }
            })
        } catch {
            let queueData = await this.sellService.orderSellResult(sellForm)
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
