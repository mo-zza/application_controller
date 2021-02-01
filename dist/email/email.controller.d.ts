import { EmailService } from './email.service';
import { Response } from 'express';
import { EmailCheckDto, EmailSendDto } from './dto/email.dto';
import { ResponseService } from 'src/response/response.service';
export declare class EmailController {
    private readonly emailService;
    private readonly responseService;
    constructor(emailService: EmailService, responseService: ResponseService);
    otpSend(emailForm: EmailSendDto, res: Response): Promise<void>;
    otpChekc(otpQuery: EmailCheckDto, res: Response): Promise<void>;
}
