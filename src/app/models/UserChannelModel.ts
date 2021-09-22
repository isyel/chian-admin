


import { BaseModel } from './BaseModel';
import { UserModel } from './UserModel';
import { BaseChannelModel } from './BaseChannelModel';

export class UserChannelModel extends BaseModel {
    public userId: number;
    public user: UserModel;
    public parentId: number;
    public baseChannelId: number;
    public baseChannel: BaseChannelModel;
    public referenceNumber: string;
    public left: number;
    public right: number;
    public directDownLine: number;
    public paymentConfirmed: boolean;
    public awaitingProcess: boolean;
    public isActive: boolean;
}