import { Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/firestore/firestore.service';
import { RabbitmqService } from 'src/rabbitmq/rabbitmq.service';
import { ResponseInputDto } from 'src/response/dto/response.dto';
import { ResponseService } from 'src/response/response.service';
import { ChangeNickNamedto, ChangeNoticeDto, ChangePasswordDto, CreateUserDto, GetSimpleDto, LoginDto } from './dto/user.dto';

@Injectable()
export class UsersService {
    constructor(private readonly rabbitmq: RabbitmqService, private readonly firebaseAuth: FirestoreService) {}

    async loginResult(loginForm: LoginDto) {
        let uid = await this.firebaseAuth.getUserId(loginForm.user_email)
        let loginQueueBody = await this.rabbitmq.getControllerQueueBody('user login', loginForm, uid)
        let queueData = await this.rabbitmq.getQueueData(loginQueueBody)
        return queueData
    }

    async createUserResult(createUserForm: CreateUserDto) {
        let uid = await this.firebaseAuth.getUserId(createUserForm.user_email)
        let createUserQueueBody = await this.rabbitmq.getControllerQueueBody('user craete', createUserForm, uid)
        let queueData = await this.rabbitmq.getQueueData(createUserQueueBody)
        return queueData
    }

    async changePasswordResult(passwordForm: ChangePasswordDto) {
        let uid = await this.firebaseAuth.getUserId(passwordForm.user_email)
        let changePasswordQueueBody = await this.rabbitmq.getControllerQueueBody('user change password', passwordForm, uid)
        let queueData = await this.rabbitmq.getQueueData(changePasswordQueueBody)
        return queueData
    }

    async getPasswordResult(userSimpleQuerys: GetSimpleDto) {
        let uid = await this.firebaseAuth.getUserId(userSimpleQuerys.user_email)
        let passwordQueueBody = await this.rabbitmq.getControllerQueueBody('user get password', userSimpleQuerys, uid)
        let queueData = await this.rabbitmq.getQueueData(passwordQueueBody)
        return queueData
    }

    async getAssetResult(userSimpleQuerys: GetSimpleDto) {
        let uid = await this.firebaseAuth.getUserId(userSimpleQuerys.user_email)
        let assetQueueBody = await this.rabbitmq.getControllerQueueBody('user asset', userSimpleQuerys, uid)
        let queueData = await this.rabbitmq.getQueueData(assetQueueBody)
        return queueData
    }

    async getUserHistoryResult(userSimpleQuerys: GetSimpleDto) {
        let uid = await this.firebaseAuth.getUserId(userSimpleQuerys.user_email)
        let userHistoryQueueBody = await this.rabbitmq.getControllerQueueBody('user history', userSimpleQuerys, uid)
        let queueData = await this.rabbitmq.getQueueData(userHistoryQueueBody)
        return queueData
    }

    async getUserChartResult(userSimpleQuerys: GetSimpleDto) {
        let uid = await this.firebaseAuth.getUserId(userSimpleQuerys.user_email)
        let userChartQueueBody = await this.rabbitmq.getControllerQueueBody('user chart', userSimpleQuerys, uid)
        let queueData = await this.rabbitmq.getQueueData(userChartQueueBody)
        return queueData
    }

    async changeNoticeResult(changeNoticeForm: ChangeNoticeDto) {
        let uid = await this.firebaseAuth.getUserId(changeNoticeForm.user_email)
        let changeNoticeQueueBody = await this.rabbitmq.getControllerQueueBody('user notice setting', changeNoticeForm, uid)
        let queueData = await this.rabbitmq.getQueueData(changeNoticeQueueBody)
        return queueData
    }

    async getNoticeListResult(userSimpleQuerys: GetSimpleDto) {
        let uid = this.firebaseAuth.getUserId(userSimpleQuerys.user_email)
        let noticeListQueueBody = this.rabbitmq.getControllerQueueBody('user notice list', userSimpleQuerys, uid)
        let queueData = await this.rabbitmq.getQueueData(noticeListQueueBody)
        return queueData
    }

    async changeNickNameResult(changeNickNameForm: ChangeNickNamedto) {
        let uid = await this.firebaseAuth.getUserId(changeNickNameForm.user_email)
        let nickNameQueueBody = await this.rabbitmq.getControllerQueueBody('user update nick name', changeNickNameForm, uid)
        let queueData = await this.rabbitmq.getQueueData(nickNameQueueBody)
        return queueData
    }
}
