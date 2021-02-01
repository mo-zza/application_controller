import { Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/firestore/firestore.service';
import { RabbitmqService } from 'src/rabbitmq/rabbitmq.service';
import { EmailCheckDto, EmailSendDto } from './dto/email.dto';

@Injectable()
export class EmailService {
    constructor(private readonly rabbitmq: RabbitmqService, private readonly firebaseAuth: FirestoreService) {

    }

    async sendOtpResult(emailForm: EmailSendDto) {
        let uid = await this.firebaseAuth.getUserId(emailForm.user_email)
        let emailQueueBody = await this.rabbitmq.getControllerQueueBody('email send', emailForm, uid)
        let queueData = await this.rabbitmq.getQueueData(emailQueueBody)
        return queueData
    }

    async checkOtpResult(otpQuery: EmailCheckDto) {
        let uid = await this.firebaseAuth.getUserId(otpQuery.user_email)
        let checkOtpQueueBody = await this.rabbitmq.getControllerQueueBody('email otp check', otpQuery, uid)
        let queueData = await this.rabbitmq.getQueueData(checkOtpQueueBody)
        return queueData
    }
}
