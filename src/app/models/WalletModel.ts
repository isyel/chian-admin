import { BaseModel } from './BaseModel';
import { UserModel } from './UserModel';
import { WalletTypeEnum } from './Enum/WalletTypeEnum';
import { WalletHistoryModel } from './WalletHistoryModel';
import { UserBankDetailModel } from './UserBankDetailModel';
import { CompanyModel } from './CompanyModel';

export class WalletModel extends BaseModel {
    public userId: number;
    public user: UserModel;
    public walletType: WalletTypeEnum;
    public referenceNumber: string;
    public balance: number;
    public amountLien: number;
    public availableBalance: number;
    public isActive: boolean;
    public lastCreditDate: Date;
    public lastDebitDate: Date;
    public walletHistory: WalletHistoryModel[];
}

export class WalletBalanceModel extends BaseModel {
    public userId: number;
    public user: UserModel;
    public companyId: number;
    public company: CompanyModel;
    public walletType: WalletTypeEnum;
    public referenceNumber: string;
    public balance: number;
    public amountLien: number;
    public isActive: boolean;
    public lastCreditDate: Date;
    public lastDebitDate: Date;
}

export class WalletTransactionModel {
    public walletId: number;
    public transactionReference: string;
    public amount: number;
    public paymentDate: Date;
    public naration: string;
    public authorizedUserId: number;
}

export class PendingPaymentModel extends WalletModel {
    public bankDetails: UserBankDetailModel[];
}