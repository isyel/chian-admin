


import { BaseModel } from './BaseModel';
import { WalletModel } from './WalletModel';

export class WalletTransferModel extends BaseModel {
    public senderWalletId: number;
    public senderWallet: WalletModel;
    public recieverWalletId: number;
    public recieverWallet: WalletModel;
    public amount: number;
    public referenceNumber: string;
    public transferDate: Date;
}

export class FundTransferModel {
    public senderWalletId: number;
    public recieverWalletId: number;
    public amount: number;
    public naration: string;
}