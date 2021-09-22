


import { BaseModel } from './BaseModel';
import { WalletModel } from './WalletModel';
import { TransactionTypeEnum } from './Enum/TransactionTypeEnum';
import { UserModel } from './UserModel';

export class WalletHistoryModel extends BaseModel {
    public walletId: number;
    public wallet: WalletModel;
    public transactionReference: string;
    public paymentType: TransactionTypeEnum;
    public amount: number;
    public paymentDate: Date;
    public naration: string;
    public isApproved: boolean;
    public approvedDate: Date;
    public authorizedUserId: number;
    public authorizedUser: UserModel;
}