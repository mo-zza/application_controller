import { FirestoreService } from 'src/firestore/firestore.service';
import { RabbitmqService } from 'src/rabbitmq/rabbitmq.service';
import { FundBalanceDto, FundCumReturnDto, FundDefaultDto, FundSimpleDto, MoneyFlowHisotryDto } from './dto/fund.dto';
export declare class FundService {
    private readonly rabbitmq;
    private readonly firebaseAuth;
    constructor(rabbitmq: RabbitmqService, firebaseAuth: FirestoreService);
    moneyFlowHistoryResult(moneyFlowQuery: MoneyFlowHisotryDto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
    priceHistoryResult(priceHistoryQuery: FundDefaultDto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
    rateofReturnHistoryResult(rateofReturnHistoryQuery: FundDefaultDto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
    cumReturnResult(cumReturnQuery: FundCumReturnDto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
    returnHistoryResult(returnHistoryQuery: FundDefaultDto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
    fundingHistoryResult(fundingHistoryQuery: FundDefaultDto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
    depositHistoryReuslt(depositHistoryQuery: FundDefaultDto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
    withdrawalHistoryReuslt(wtihdrawalHistoryQuery: FundDefaultDto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
    pricePercentHistoryResult(pricePercentHistoryQuery: FundDefaultDto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
    balanceHistoryResult(balanceHistoryQuery: FundBalanceDto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
    portChartResult(portChartQuery: FundSimpleDto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
    fundAssetResult(fundAssetQuery: FundSimpleDto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
    fundReportResult(fundReportQuery: FundSimpleDto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
}
