import { SellService } from './sell.service';
import { Response } from 'express';
import { SellDto } from './dto/sell.dto';
import { ResponseService } from 'src/response/response.service';
export declare class SellController {
    private readonly sellService;
    private readonly responseService;
    constructor(sellService: SellService, responseService: ResponseService);
    orderSell(sellForm: SellDto, res: Response): Promise<void>;
}
