


import { BaseModel } from './BaseModel';
import { UserModel } from './UserModel';
import { UserBoardModel } from './UserBoardModel';
import { AdvertModel } from './AdvertModel';

export class UserBoardAdvertModel extends BaseModel {
    public userId: number;
    public user: UserModel;
    public boardId: number;
    public userBoard: UserBoardModel;
    public advertId: number;
    public advert: AdvertModel;
    public amountEarned: number;
    public duration: number;
    public offerStartDate: Date;
    public offerEnddate: Date;
    public noOfViews: number;
    public noOfClicks: number;
    public facebookViews: number;
    public isActive: boolean;
    public unmounted: boolean;
    public unmountDate: Date;
    public unmountCharge: number;
}