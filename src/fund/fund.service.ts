import { Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/firestore/firestore.service';
import { RabbitmqService } from 'src/rabbitmq/rabbitmq.service';
import { FundBalanceDto, FundCumReturnDto, FundDefaultDto, FundSimpleDto, MoneyFlowHisotryDto } from './dto/fund.dto';

@Injectable()
export class FundService {
    constructor(private readonly rabbitmq: RabbitmqService, private readonly firebaseAuth: FirestoreService) {}

    async moneyFlowHistoryResult(moneyFlowQuery: MoneyFlowHisotryDto) {
        let moneyFlowQueueBody = await this.rabbitmq.getFundControllerQueueBody('fund money flow history', moneyFlowQuery)
        let queueData = await this.rabbitmq.getQueueData(moneyFlowQueueBody)
        return queueData
    }

    async priceHistoryResult(priceHistoryQuery: FundDefaultDto) {
        let fundPriceQueueBody = await this.rabbitmq.getFundControllerQueueBody('fund price', priceHistoryQuery)
        let queueData = await this.rabbitmq.getQueueData(fundPriceQueueBody)
        return queueData
    }

    async rateofReturnHistoryResult(rateofReturnHistoryQuery: FundDefaultDto) {
        let rateOfReturnQueueBody = await this.rabbitmq.getFundControllerQueueBody('fund rate of return history', rateofReturnHistoryQuery)
        let queueData = await this.rabbitmq.getQueueData(rateOfReturnQueueBody)
        return queueData
    }

    async cumReturnResult(cumReturnQuery: FundCumReturnDto) {
        let cumReturnQueueBody = await this.rabbitmq.getFundControllerQueueBody('fund cum return', cumReturnQuery)
        let queueData = await this.rabbitmq.getQueueData(cumReturnQueueBody)
        return queueData
    }

    async returnHistoryResult(returnHistoryQuery: FundDefaultDto) {
        let returnHistoryQueueBody = await this.rabbitmq.getFundControllerQueueBody('fund return history', returnHistoryQuery)
        let queueData = await this.rabbitmq.getQueueData(returnHistoryQueueBody)
        return queueData
    }

    async fundingHistoryResult(fundingHistoryQuery: FundDefaultDto) {
        let fundingQueueBody = await this.rabbitmq.getFundControllerQueueBody('fund funding history', fundingHistoryQuery)
        let queueData = await this.rabbitmq.getQueueData(fundingQueueBody)
        return queueData
    }

    async depositHistoryReuslt(depositHistoryQuery: FundDefaultDto) {
        let fundDepositQueueBody = await this.rabbitmq.getFundControllerQueueBody('fund deposit history', depositHistoryQuery)
        let queueData = await this.rabbitmq.getQueueData(fundDepositQueueBody)
        return queueData
    }

    async withdrawalHistoryReuslt(wtihdrawalHistoryQuery: FundDefaultDto) {
        let fundWithdrawalQueueBody = await this.rabbitmq.getFundControllerQueueBody('fund withdrawal history', wtihdrawalHistoryQuery)
        let queueData = await this.rabbitmq.getQueueData(fundWithdrawalQueueBody)
        return queueData
    }

    async pricePercentHistoryResult(pricePercentHistoryQuery: FundDefaultDto) {
        let fundPricePercentQueueBody = await this.rabbitmq.getFundControllerQueueBody('fund price percent history', pricePercentHistoryQuery)
        let queueData = await this.rabbitmq.getQueueData(fundPricePercentQueueBody)
        return queueData
    }

    async balanceHistoryResult(balanceHistoryQuery: FundBalanceDto) {
        let uid = this.firebaseAuth.getUserId(balanceHistoryQuery.user_email)
        let fundBalanceQueueBody = this.rabbitmq.getControllerQueueBody('fund balance history', balanceHistoryQuery, uid)
        let queueData = await this.rabbitmq.getQueueData(fundBalanceQueueBody)
        return queueData
    }

    async portChartResult(portChartQuery: FundSimpleDto) {
        let fundPortChartQueueBody = await this.rabbitmq.getFundControllerQueueBody('fund port chart', portChartQuery)
        let queueData = await this.rabbitmq.getQueueData(fundPortChartQueueBody)
        return queueData
    }

    async fundAssetResult(fundAssetQuery: FundSimpleDto) {
        let fundAssetQueueBody = await this.rabbitmq.getFundControllerQueueBody('fund asset', fundAssetQuery)
        let queueData = await this.rabbitmq.getQueueData(fundAssetQueueBody)
        return queueData
    }

    async fundReportResult(fundReportQuery: FundSimpleDto) {
        let fundReportQueueBody = await this.rabbitmq.getFundControllerQueueBody('fund report', fundReportQuery)
        let queueData = await this.rabbitmq.getQueueData(fundReportQueueBody)
        return queueData
    }
}
