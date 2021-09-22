


import { BaseModel } from './BaseModel';
import { AdvertModel } from './AdvertModel';

export class PollOptionModel extends BaseModel {
    public advertId: number;
    public advert: AdvertModel;
    public option: string;
    public voteCount: number;
}

export class PollOptionMiniModel {
    public id: number;
    public option: string;
    public voteCount: number;
    public percentage: number;
}