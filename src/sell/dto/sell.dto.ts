import { from } from "rxjs"
import { IsString } from 'class-validator'

export class SellDto {
    @IsString()
    readonly user_email: string
    readonly asset : string
    readonly network: string
    readonly address: string
    readonly fund_name: string
}