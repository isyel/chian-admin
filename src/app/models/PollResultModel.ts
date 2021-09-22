


import { BaseModel } from './BaseModel';
import { AdvertModel } from './AdvertModel';
import { UserModel } from './UserModel';
import { PollOptionModel } from './PollOptionModel';

export class PollResultModel extends BaseModel {
    public advertId: number;
    public advert: AdvertModel;
    public userId: number;
    public user: UserModel;
    public pollOptionId: number;
    public pollOption: PollOptionModel;
}
export class PollVoteModel {
    public advertId: number;
    public userId: number;
    public optionId: number;
}