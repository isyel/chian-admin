


import { BaseModel } from './BaseModel';
import { RatingOptionModel } from './RatingOptionModel';
import { RatingModel } from './RatingModel';

export class RatingDetailModel extends BaseModel {
    public ratingId: number;
    public rating: RatingModel;
    public ratingOptionId: number;
    public ratingOption: RatingOptionModel;
    public ratingValue: number;
}

export class RatingDetailFormModel {
    public id: number;
    public ratingId: number;
    public ratingOptionId: number;
    public ratingValue: number;
}