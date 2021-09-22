


import { BaseModel } from './BaseModel';
import { UserModel } from './UserModel';
import { AccountTypeEnum } from './Enum/AccountTypeEnum';
import { NotificationTypeEnum } from './Enum/NotificationTypeEnum';

export class NotificationModel extends BaseModel {
    public userId: number;
    public user: UserModel;
    public userType: AccountTypeEnum;
    public type: NotificationTypeEnum;
    public title: string;
    public message: string;
    public jsonData: string;
    public seen: boolean;
}

export class PushNoticeModel {
    public userId: number;
    public userType: AccountTypeEnum;
    public title: string;
    public message: string;
    public data: string;
}