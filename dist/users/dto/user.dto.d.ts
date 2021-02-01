export declare class LoginDto {
    readonly user_email: string;
    readonly simple_pwd: string;
}
export declare class CreateUserDto {
    readonly user_email: string;
    readonly simple_pwd: string;
    readonly email_notice: string;
    readonly push_notice: string;
    readonly notice_token: string;
}
export declare class ChangePasswordDto {
    readonly user_email: string;
    readonly simple_pwd: string;
}
export declare class GetSimpleDto {
    readonly user_email: string;
}
export declare class ChangeNoticeDto {
    readonly user_email: string;
    readonly email_notice: string;
    readonly push_notice: string;
    readonly notice_token: string;
}
export declare class ChangeNickNamedto {
    readonly user_email: string;
    readonly nick_name: string;
}
