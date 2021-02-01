import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { FundService } from './fund.service';
import { Response } from 'express'
import { FundBalanceDto, FundCumReturnDto, FundDefaultDto, FundSimpleDto, MoneyFlowHisotryDto } from './dto/fund.dto';
import { ResponseService } from 'src/response/response.service';
import { ErrorInputDto } from 'src/response/dto/response.dto';

@Controller('fund')
export class FundController {
    constructor(private readonly fundService: FundService, private readonly responseService: ResponseService) {}

    @Get('MoneyFlowHistory')
    async getMoneyFlowHistory(@Query() moneyFlowQuery: MoneyFlowHisotryDto, @Res() res: Response) {
        try {
            let queueData = await this.fundService.moneyFlowHistoryResult(moneyFlowQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(HttpStatus.OK).send({ 'data' : JSON.parse(msg.content.toString())})
                }
            })
        } catch {
            let queueData = await this.fundService.moneyFlowHistoryResult(moneyFlowQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData: ErrorInputDto = JSON.parse(msg.content.toString())
                    let errorResponse = this.responseService.getErrorResponse(errorData)
                    res.status(errorResponse.response).send(errorResponse.description)
                }
            })
        }
    }

    @Get('priceHistory')
    async getPriceHistory(@Query() priceHistoryQuery: FundDefaultDto, @Res() res: Response) {
        try {
            let queueData = await this.fundService.priceHistoryResult(priceHistoryQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(HttpStatus.OK).send({ 'data' : JSON.parse(msg.content.toString())})
                }
            })
        } catch {
            let queueData = await this.fundService.priceHistoryResult(priceHistoryQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData: ErrorInputDto = JSON.parse(msg.content.toString())
                    let errorResponse = this.responseService.getErrorResponse(errorData)
                    res.status(errorResponse.response).send(errorResponse.description)
                }
            })
        }
    }

    @Get('RateofReturnHistory')
    async getRateOtReturnHistory(@Query() rateOfReturnQuery: FundDefaultDto, @Res() res: Response) {
        try {
            let queueData = await this.fundService.rateofReturnHistoryResult(rateOfReturnQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(HttpStatus.OK).send({ 'data' : JSON.parse(msg.content.toString())})
                }
            })
        } catch {
            let queueData = await this.fundService.rateofReturnHistoryResult(rateOfReturnQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData: ErrorInputDto = JSON.parse(msg.content.toString())
                    let errorResponse = this.responseService.getErrorResponse(errorData)
                    res.status(errorResponse.response).send(errorResponse.description)
                }
            })
        }
    }

    @Get('cumReturn')
    async getCumReturn(@Query() cumReturnQuery: FundCumReturnDto, @Res() res: Response) {
        try {
            let queueData = await this.fundService.cumReturnResult(cumReturnQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(HttpStatus.OK).send({ 'data' : JSON.parse(msg.content.toString())})
                }
            })
        } catch {
            let queueData = await this.fundService.cumReturnResult(cumReturnQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData: ErrorInputDto = JSON.parse(msg.content.toString())
                    let errorResponse = this.responseService.getErrorResponse(errorData)
                    res.status(errorResponse.response).send(errorResponse.description)
                }
            })
        }
    }

    @Get('returnHistory')
    async getReturnHistory(@Query() returnHistoryQuery: FundDefaultDto, @Res() res: Response) {
        try {
            let queueData = await this.fundService.returnHistoryResult(returnHistoryQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(HttpStatus.OK).send({ 'data' : JSON.parse(msg.content.toString())})
                }
            })
        } catch {
            let queueData = await this.fundService.returnHistoryResult(returnHistoryQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData: ErrorInputDto = JSON.parse(msg.content.toString())
                    let errorResponse = this.responseService.getErrorResponse(errorData)
                    res.status(errorResponse.response).send(errorResponse.description)
                }
            })
        }
    }

    @Get('fundingHistory')
    async getFundinsHistory(@Query() fundingHistoryQuery: FundDefaultDto, @Res() res: Response) {
        try {
            let queueData = await this.fundService.fundingHistoryResult(fundingHistoryQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(HttpStatus.OK).send({ 'data' : JSON.parse(msg.content.toString())})
                }
            })
        } catch {
            let queueData = await this.fundService.fundingHistoryResult(fundingHistoryQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData: ErrorInputDto = JSON.parse(msg.content.toString())
                    let errorResponse = this.responseService.getErrorResponse(errorData)
                    res.status(errorResponse.response).send(errorResponse.description)
                }
            })
        }
    }

    @Get('depositHistory')
    async getDepositHistory(@Query() depositHistoryQuery: FundDefaultDto, @Res() res: Response) {
        try {
            let queueData = await this.fundService.depositHistoryReuslt(depositHistoryQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(HttpStatus.OK).send({ 'data' : JSON.parse(msg.content.toString())})
                }
            })
        } catch {
            let queueData = await this.fundService.depositHistoryReuslt(depositHistoryQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData: ErrorInputDto = JSON.parse(msg.content.toString())
                    let errorResponse = this.responseService.getErrorResponse(errorData)
                    res.status(errorResponse.response).send(errorResponse.description)
                }
            })
        }
    }

    @Get('withdrawalHistory')
    async getWithdrawalHistory(@Query() withdrawalHisotryQuery: FundDefaultDto, @Res() res: Response) {
        try {
            let queueData = await this.fundService.withdrawalHistoryReuslt(withdrawalHisotryQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(HttpStatus.OK).send({ 'data' : JSON.parse(msg.content.toString())})
                }
            })
        } catch {
            let queueData = await this.fundService.withdrawalHistoryReuslt(withdrawalHisotryQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData: ErrorInputDto = JSON.parse(msg.content.toString())
                    let errorResponse = this.responseService.getErrorResponse(errorData)
                    res.status(errorResponse.response).send(errorResponse.description)
                }
            })
        }
    }

    @Get('pricePercentHistory')
    async getPricePercentHistory(@Query() pricePercentHistoryQuery: FundDefaultDto, @Res() res: Response) {
        try {
            let queueData = await this.fundService.pricePercentHistoryResult(pricePercentHistoryQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(HttpStatus.OK).send({ 'data' : JSON.parse(msg.content.toString())})
                }
            })
        } catch {
            let queueData = await this.fundService.pricePercentHistoryResult(pricePercentHistoryQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData: ErrorInputDto = JSON.parse(msg.content.toString())
                    let errorResponse = this.responseService.getErrorResponse(errorData)
                    res.status(errorResponse.response).send(errorResponse.description)
                }
            })
        }
    }

    @Get('balanceHistory')
    async getBalanceHistory(@Query() balanceHistoryQuery: FundBalanceDto, @Res() res: Response) {
        try {
            let queueData = await this.fundService.balanceHistoryResult(balanceHistoryQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(HttpStatus.OK).send({ 'data' : JSON.parse(msg.content.toString())})
                }
            })
        } catch {
            let queueData = await this.fundService.balanceHistoryResult(balanceHistoryQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData: ErrorInputDto = JSON.parse(msg.content.toString())
                    let errorResponse = this.responseService.getErrorResponse(errorData)
                    res.status(errorResponse.response).send(errorResponse.description)
                }
            })
        }
    }

    @Get('portChart')
    async getPortChart(@Query() portChartQuery: FundSimpleDto, @Res() res: Response){
        try {
            let queueData = await this.fundService.portChartResult(portChartQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(HttpStatus.OK).send({ 'data' : JSON.parse(msg.content.toString())})
                }
            })
        } catch {
            let queueData = await this.fundService.portChartResult(portChartQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData: ErrorInputDto = JSON.parse(msg.content.toString())
                    let errorResponse = this.responseService.getErrorResponse(errorData)
                    res.status(errorResponse.response).send(errorResponse.description)
                }
            })
        }
    }

    @Get('asset')
    async getFundAsset(@Query() fundAssetQuery: FundSimpleDto, @Res() res: Response) {
        try {
            let queueData = await this.fundService.fundAssetResult(fundAssetQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(HttpStatus.OK).send({ 'data' : JSON.parse(msg.content.toString())})
                }
            })
        } catch {
            let queueData = await this.fundService.fundAssetResult(fundAssetQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    let errorData: ErrorInputDto = JSON.parse(msg.content.toString())
                    let errorResponse = this.responseService.getErrorResponse(errorData)
                    res.status(errorResponse.response).send(errorResponse.description)
                }
            })
        }
    }

    @Get('report')
    async getFundReport(@Query() fundReportQuery: FundSimpleDto, @Res() res: Response) {
        try {
            let queueData = await this.fundService.fundReportResult(fundReportQuery)
            queueData.channel.consume(queueData.queue.queue, (msg) => {
                if (queueData.correlationdId == msg.properties.correlationId) {
                    res.status(HttpStatus.OK).send({ 'data' : JSON.parse(msg.content.toString())})
                }
            })
        } catch {
            let queueData = await this.fundService.fundReportResult(fundReportQuery)
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
