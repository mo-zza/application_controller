import { UsersService } from './users.service';
import { Response } from 'express';
import { ChangeNickNamedto, ChangeNoticeDto, ChangePasswordDto, CreateUserDto, GetSimpleDto, LoginDto } from './dto/user.dto';
import { ResponseService } from 'src/response/response.service';
export declare class UsersController {
    private readonly usersService;
    private readonly responseService;
    constructor(usersService: UsersService, responseService: ResponseService);
    login(loginQuery: LoginDto): Promise<void>;
    user(createForm: CreateUserDto, res: Response): Promise<void>;
    userPassword(updatePasswordForm: ChangePasswordDto, res: Response): Promise<void>;
    userPasswrod(userSimpleQuery: GetSimpleDto, res: Response): Promise<void>;
    userAsset(userSimpleQuery: GetSimpleDto, res: Response): Promise<void>;
    userHistory(userSimpleQuery: GetSimpleDto, res: Response): Promise<void>;
    userChart(userSimpleQuery: GetSimpleDto, res: Response): Promise<void>;
    noticeSetting(changeNoticeForm: ChangeNoticeDto, res: Response): Promise<void>;
    noticeList(userSimpleQuery: GetSimpleDto, res: Response): Promise<void>;
    nickName(changeNickNameForm: ChangeNickNamedto, res: Response): Promise<void>;
}
