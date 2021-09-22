

import { BaseModel } from './BaseModel';
import { OfferTypeEnum } from './Enum/OfferTypeEnum';
import { GenderEnum } from './Enum/GenderEnum';

export class OfferModel extends BaseModel {
    public id: number;
    public title: string;
    public offerType: OfferTypeEnum;
    public offerImage: string;
    public offerUrl: string;
    public description: string;
    public posterScreenName: string;
    public posterPhoto: string;
    public amountPerView: number;
    public requiredViewCount: number;
    public availableSlot: number;
    public occupiedSlot: number;
    public actualViewCount: number;
    public gender: GenderEnum;
    public minAge: number;
    public maxAge: number;
    public location: string;
    public duration: number;
    public startDate: Date;
    public endDate: Date;
    public dailyStartTime: string;
    public dailyClickLimit: number;
    public dailyClickCount: number;
    public isActive: boolean;
}
