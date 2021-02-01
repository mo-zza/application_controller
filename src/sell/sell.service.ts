import { Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/firestore/firestore.service';
import { RabbitmqService } from 'src/rabbitmq/rabbitmq.service';
import { SellDto } from './dto/sell.dto';

@Injectable()
export class SellService {
    constructor(private readonly rabbitmq: RabbitmqService, private readonly firebaseauth: FirestoreService) {}

    async orderSellResult(sellForm: SellDto) {
        let uid = await this.firebaseauth.getUserId(sellForm.user_email)
        let orderSellQueueBody = await this.rabbitmq.getControllerQueueBody('sell order', sellForm, uid)
        let queueData = await this.rabbitmq.getQueueData(orderSellQueueBody)
        return queueData

    }
}
