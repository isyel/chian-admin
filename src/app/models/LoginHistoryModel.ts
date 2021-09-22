


import { BaseModel } from './BaseModel';
import { UserModel } from './UserModel';
import { LoginModeEnum } from './Enum/LoginModeEnum';

export class LoginHistoryModel extends BaseModel {
    public userId: number;
    public user: UserModel;
    public ipAddress: string;
    public loginChannel: LoginModeEnum;
    public loginAgent: string;
    public loginTime: Date;
    public loginLocation: string;
}