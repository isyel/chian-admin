


import { BaseModel } from './BaseModel';
import { UserModel } from './UserModel';
import { WalletModel } from './WalletModel';

export class WalletDepositModel extends BaseModel {
    public userId: number;
    public user: UserModel;
    public walletId: number;
    public wallet: WalletModel;
    public refNumber: string;
    public amount: number;
    public paymentDate: Date;
    public note: string;
    public isApproved: boolean;
    public approvedDate: Date;
}