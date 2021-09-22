


import { BaseModel } from './BaseModel';
import { UserModel } from './UserModel';
import { WalletModel } from './WalletModel';
import { WalletTypeEnum } from './Enum/WalletTypeEnum';

export class WalletTopupModel extends BaseModel {
    public userId: number;
    public user: UserModel;
    public userWalletId: number;
    public userWallet: WalletModel;
    public topupAmount: number;
    public balanceBeforeTopup: number;
    public balanceAfterTopup: number;
    public adminUserId: number;
    public adminUser: UserModel;
}

export class WalletTopupFormModel {
    public userId: number;
    public walletType: WalletTypeEnum;
    public amount: number;
    public adminUserId: number;
}