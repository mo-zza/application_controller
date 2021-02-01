import { FirestoreService } from 'src/firestore/firestore.service';
import { RabbitmqService } from 'src/rabbitmq/rabbitmq.service';
import { SellDto } from './dto/sell.dto';
export declare class SellService {
    private readonly rabbitmq;
    private readonly firebaseauth;
    constructor(rabbitmq: RabbitmqService, firebaseauth: FirestoreService);
    orderSellResult(sellForm: SellDto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
}
