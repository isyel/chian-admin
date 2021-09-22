


import { BaseModel } from './BaseModel';
import { RatingTypeEnum } from './Enum/RatingTypeEnum';
import { UserModel } from './UserModel';
import { RatingDetailModel, RatingDetailFormModel } from './RatingDetailModel';

export class RatingModel extends BaseModel {
    public userId: number;
    public ratingType: RatingTypeEnum;
    public avgRating: number;
    public comment: string;
    public ratedByUserId: number;
    public ratedByUser: UserModel;
    public showIdentity: boolean;
    public isApproved: boolean;
    public isActive: boolean;
    public ratingDetails: RatingDetailModel[];
}

export class RatingFormModel {
    public id: number;
    public userId: number;
    public ratingType: RatingTypeEnum;
    public avgRating: number;
    public comment: string;
    public ratedByUserId: number;
    public showIdentity: boolean;
    public isApproved: boolean;
    public isActive: boolean;
    public ratingDetails: RatingDetailFormModel[];
}