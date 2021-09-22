import { BaseModel } from './BaseModel';
import { UserModel } from './UserModel';

export class UserBoardModel extends BaseModel {
    public userId: number;
    public user: UserModel;
    public title: string;
    public isAvailable: boolean;
    public boardWorth: number;
    public offerStartDate: Date;
    public offerEndDate: Date;
}