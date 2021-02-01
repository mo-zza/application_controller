import { Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/firestore/firestore.service';
import { RabbitmqService } from 'src/rabbitmq/rabbitmq.service';
import { WithdrawalDto } from './dto/withdrawal.dto';

@Injectable()
export class WithdrawalService {
    constructor(private readonly rabbitmq: RabbitmqService, private readonly firebaseAuth: FirestoreService) {}

    async getSellOrderResult(sellQuery: WithdrawalDto) {
        let uid = await this.firebaseAuth.getUserId(sellQuery.user_email)
        let sellOrderInfoQueueBody = await this.rabbitmq.getControllerQueueBody('withdrawal info', sellQuery, uid)
        let queueData = await this.rabbitmq.getQueueData(sellOrderInfoQueueBody)
        return queueData
    }

    async cancelSellResult(cancelSellQuery: WithdrawalDto) {
        let uid = await this.firebaseAuth.getUserId(cancelSellQuery.user_email)
        let cancelSellQueueBody = await this.rabbitmq.getControllerQueueBody('withdrawal cancel', cancelSellQuery, uid)
        let queueData = await this.rabbitmq.getQueueData(cancelSellQueueBody)
        return queueData
    }
}
