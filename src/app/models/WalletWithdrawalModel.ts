


import { BaseModel } from './BaseModel';
import { UserModel } from './UserModel';
import { WalletModel } from './WalletModel';
import { UserBankDetailModel } from './UserBankDetailModel';

export class WalletWithdrawalModel extends BaseModel {
    public userId: number;
    public user: UserModel;
    public walletId: number;
    public wallet: WalletModel;
    public bankDetailId: number;
    public bankDetail: UserBankDetailModel;
    public amount: number;
    public refNumber: string;
    public isApproved: boolean;
    public approvedBy: number;
    public approvedDate: Date;
}

export class FundWithdrawalModel {
    public userId: number;
    public walletId: number;
    public bankDetailId: number;
    public amount: number;
    public refNumber: string;
}

export class WithdrawalApprovalModel {
    public requestId: number;
    public approvedBy: number;
    public refNumber: string;
    public transferDetails: string;
}