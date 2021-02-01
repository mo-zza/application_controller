import { IsString } from 'class-validator'

export class WithdrawalDto {
    @IsString()
    readonly user_email: string
    readonly fund_name: string = null
}