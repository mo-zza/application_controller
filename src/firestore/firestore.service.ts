import { Injectable } from '@nestjs/common';
import { db } from 'src/main';

@Injectable()
export class FirestoreService {

    async callBack(userInfo) {
        return await userInfo.then((userRecord) => {
            return userRecord.uid
        })
    }

    async getUserId(userEmail: string){
        let user_info = db.getUserByEmail(userEmail)
        return await this.callBack(user_info)
    }
}
