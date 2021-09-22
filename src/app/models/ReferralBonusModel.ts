


import { BaseModel } from './BaseModel';
import { UserModel } from './UserModel';

export class ReferralBonusModel extends BaseModel {
    public userId: number;
    public user: UserModel;
    public downlineUserId: number;
    public downlineUser: UserModel;
    public amount: number;
    public comment: string;
    public paymentIsDue: boolean;
    public isPaId: boolean;
    public paymentDate: Date;
}

export class ReferralBonusFormModel extends BaseModel {
    public userId: number;
    public downlineUserId: number;
    public amount: number;
    public comment: string;
    public paymentDate: Date;
}