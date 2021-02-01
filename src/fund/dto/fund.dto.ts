import { IsString } from 'class-validator'

export class MoneyFlowHisotryDto {
    @IsString()
    readonly fund_name: string
    readonly interval: string = '1d'
}

export class FundDefaultDto {
    @IsString()
    readonly fund_name: string
    readonly start: string
    readonly limit: string
    readonly interval: string = '1d'
}

export class FundCumReturnDto {
    @IsString()
    readonly fund_name: string
}

export class FundBalanceDto {
    @IsString()
    readonly user_email: string
    readonly fund_name: string
    readonly limit: string
    readonly interval: string
}

export class FundSimpleDto {
    @IsString()
    readonly fund_name: string
}