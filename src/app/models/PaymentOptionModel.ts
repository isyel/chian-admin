


import { BaseModel } from './BaseModel';
import { PaymentMethodEnum } from './Enum/PaymentMethodEnum';
import { UserModel } from './UserModel';

export class PaymentOptionModel extends BaseModel {
    public userId: number;
    public user: UserModel;
    public paymentMethod: PaymentMethodEnum;
    public accountName: string;
    public accountNumber: string;
}