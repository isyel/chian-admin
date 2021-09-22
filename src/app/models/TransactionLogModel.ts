


import { BaseModel } from './BaseModel';
import { UserModel } from './UserModel';
import { IndustryModel } from './IndustryModel';
import { PaymentTypeEnum } from './Enum/PaymentTypeEnum';
import { WalletTypeEnum } from './Enum/WalletTypeEnum';

export class TransactionLogModel extends BaseModel {
    public userId: number;
    public user: UserModel;
    public serviceCategoryId: number;
    public serviceCategory: IndustryModel;
    public paymentType: PaymentTypeEnum;
    public walletType: WalletTypeEnum;
    public naration: string;
    public refNumber: string;
    public paymentChannel: string;
    public amount: number;
    public paymentDate: Date;
    public status: boolean;
    public statusMessage: string;
    public invoiceNumber: string;
}