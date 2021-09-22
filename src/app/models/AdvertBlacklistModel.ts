


import { BaseModel } from './BaseModel';
import { AdvertModel } from './AdvertModel';
import { UserModel } from './UserModel';

export class AdvertBlacklistModel extends BaseModel {
    public advertId: number;
    public advert: AdvertModel;
    public userId: number;
    public user: UserModel;
    public reason: string;
}

export class BlacklistFormModel {
    public advertId: number;
    public userId: number;
    public reason: string;
}