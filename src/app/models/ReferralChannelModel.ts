


import { BaseModel } from './BaseModel';
import { UserModel } from './UserModel';

export class ReferralChannelModel extends BaseModel {
    public userId: number;
    public user: UserModel;
    public parentId: number;
    public parent: UserModel;
    public referenceCode: string;
    public lft: number;
    public rght: number;
    public downlineCount: number;
    public active: boolean;
}