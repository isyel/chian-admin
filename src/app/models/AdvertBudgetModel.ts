


import { BaseModel } from './BaseModel';
import { AdvertModel } from './AdvertModel';

export class AdvertBudgetModel extends BaseModel {
    public advertId: number;
    public advert: AdvertModel;
    public amountBudgeted: number;
    public amountUsed: number;
    public balance: number;
    public isActive: boolean;
}