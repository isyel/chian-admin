


import { BaseModel } from './BaseModel';
import { AdvertModel } from './AdvertModel';
import { UserModel } from './UserModel';
import { ReactionEnum } from './Enum/ReactionEnum';

export class AdvertReactionModel extends BaseModel {
    public advertId: number;
    public advert: AdvertModel;
    public userId: number;
    public user: UserModel;
    public reaction: ReactionEnum;
}

export class PostReactionModel {
    public advertId: number;
    public userId: number;
    public reaction: ReactionEnum;
    public remove: boolean;
}