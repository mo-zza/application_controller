import { WithdrawalService } from './withdrawal.service';
import { Response } from 'express';
import { WithdrawalDto } from './dto/withdrawal.dto';
import { ResponseService } from 'src/response/response.service';
export declare class WithdrawalController {
    private readonly withdrawalService;
    private readonly responseService;
    constructor(withdrawalService: WithdrawalService, responseService: ResponseService);
    getSellOrder(sellQuery: WithdrawalDto, res: Response): Promise<void>;
    cancelWithdrwal(cancelSellQuery: WithdrawalDto, res: Response): Promise<void>;
}
