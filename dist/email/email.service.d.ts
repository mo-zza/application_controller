import { FirestoreService } from 'src/firestore/firestore.service';
import { RabbitmqService } from 'src/rabbitmq/rabbitmq.service';
import { EmailCheckDto, EmailSendDto } from './dto/email.dto';
export declare class EmailService {
    private readonly rabbitmq;
    private readonly firebaseAuth;
    constructor(rabbitmq: RabbitmqService, firebaseAuth: FirestoreService);
    sendOtpResult(emailForm: EmailSendDto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
    checkOtpResult(otpQuery: EmailCheckDto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
}
