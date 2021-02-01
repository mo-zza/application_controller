import { FirestoreService } from 'src/firestore/firestore.service';
import { RabbitmqService } from 'src/rabbitmq/rabbitmq.service';
import { WithdrawalDto } from './dto/withdrawal.dto';
export declare class WithdrawalService {
    private readonly rabbitmq;
    private readonly firebaseAuth;
    constructor(rabbitmq: RabbitmqService, firebaseAuth: FirestoreService);
    getSellOrderResult(sellQuery: WithdrawalDto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
    cancelSellResult(cancelSellQuery: WithdrawalDto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
}
