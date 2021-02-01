import { IsString } from 'class-validator'

export class LoginDto {
    @IsString()
    readonly user_email: string
    readonly simple_pwd: string
}

export class CreateUserDto {
    @IsString()
    readonly user_email: string
    readonly simple_pwd: string
    readonly email_notice: string
    readonly push_notice: string
    readonly notice_token: string
}

export class ChangePasswordDto {
    @IsString()
    readonly user_email: string
    readonly simple_pwd: string
}

export class GetSimpleDto {
    @IsString()
    readonly user_email: string
}

export class ChangeNoticeDto {
    @IsString()
    readonly user_email: string
    readonly email_notice: string
    readonly push_notice: string
    readonly notice_token: string
}

export class ChangeNickNamedto {
    @IsString()
    readonly user_email: string
    readonly nick_name: string
}