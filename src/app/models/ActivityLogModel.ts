


import { BaseModel } from './BaseModel';
import { UserModel } from './UserModel';

export class ActivityLogModel extends BaseModel {
    public userId: number;
    public user: UserModel;
    public logType: string;
    public logDetail: string;
    public logData: string;
}