import { FundService } from './fund.service';
import { Response } from 'express';
import { FundBalanceDto, FundCumReturnDto, FundDefaultDto, FundSimpleDto, MoneyFlowHisotryDto } from './dto/fund.dto';
import { ResponseService } from 'src/response/response.service';
export declare class FundController {
    private readonly fundService;
    private readonly responseService;
    constructor(fundService: FundService, responseService: ResponseService);
    getMoneyFlowHistory(moneyFlowQuery: MoneyFlowHisotryDto, res: Response): Promise<void>;
    getPriceHistory(priceHistoryQuery: FundDefaultDto, res: Response): Promise<void>;
    getRateOtReturnHistory(rateOfReturnQuery: FundDefaultDto, res: Response): Promise<void>;
    getCumReturn(cumReturnQuery: FundCumReturnDto, res: Response): Promise<void>;
    getReturnHistory(returnHistoryQuery: FundDefaultDto, res: Response): Promise<void>;
    getFundinsHistory(fundingHistoryQuery: FundDefaultDto, res: Response): Promise<void>;
    getDepositHistory(depositHistoryQuery: FundDefaultDto, res: Response): Promise<void>;
    getWithdrawalHistory(withdrawalHisotryQuery: FundDefaultDto, res: Response): Promise<void>;
    getPricePercentHistory(pricePercentHistoryQuery: FundDefaultDto, res: Response): Promise<void>;
    getBalanceHistory(balanceHistoryQuery: FundBalanceDto, res: Response): Promise<void>;
    getPortChart(portChartQuery: FundSimpleDto, res: Response): Promise<void>;
    getFundAsset(fundAssetQuery: FundSimpleDto, res: Response): Promise<void>;
    getFundReport(fundReportQuery: FundSimpleDto, res: Response): Promise<void>;
}
