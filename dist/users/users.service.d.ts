import { FirestoreService } from 'src/firestore/firestore.service';
import { RabbitmqService } from 'src/rabbitmq/rabbitmq.service';
import { ChangeNickNamedto, ChangeNoticeDto, ChangePasswordDto, CreateUserDto, GetSimpleDto, LoginDto } from './dto/user.dto';
export declare class UsersService {
    private readonly rabbitmq;
    private readonly firebaseAuth;
    constructor(rabbitmq: RabbitmqService, firebaseAuth: FirestoreService);
    loginResult(loginForm: LoginDto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
    createUserResult(createUserForm: CreateUserDto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
    changePasswordResult(passwordForm: ChangePasswordDto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
    getPasswordResult(userSimpleQuerys: GetSimpleDto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
    getAssetResult(userSimpleQuerys: GetSimpleDto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
    getUserHistoryResult(userSimpleQuerys: GetSimpleDto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
    getUserChartResult(userSimpleQuerys: GetSimpleDto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
    changeNoticeResult(changeNoticeForm: ChangeNoticeDto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
    getNoticeListResult(userSimpleQuerys: GetSimpleDto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
    changeNickNameResult(changeNickNameForm: ChangeNickNamedto): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
}
