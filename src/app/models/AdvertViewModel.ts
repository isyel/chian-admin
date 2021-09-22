


import { BaseModel } from './BaseModel';
import { AdvertModel } from './AdvertModel';
import { UserModel } from './UserModel';

export class AdvertViewModel extends BaseModel {
    public advertId: number;
    public advert: AdvertModel;
    public userId: number;
    public user: UserModel;
    public count: number;
}