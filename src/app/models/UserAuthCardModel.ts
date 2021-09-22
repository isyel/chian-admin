


import { BaseModel } from './BaseModel';
import { UserModel } from './UserModel';

export class UserAuthCardModel extends BaseModel {
    public userId: number;
    public user: UserModel;
    public cardType: string;
    public cardLast4Number: string;
    public expiryMonth: string;
    public expiryYear: string;
    public bank: string;
    public channel: string;
    public reusable: boolean;
    public countryCode: string;
}