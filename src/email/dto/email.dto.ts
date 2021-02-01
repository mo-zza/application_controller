import { IsString } from 'class-validator'

export class EmailSendDto {
    @IsString()
    readonly user_email: string
}

export class EmailCheckDto {
    @IsString()
    readonly user_email: string
    readonly otp: string
}