


import { BaseModel } from './BaseModel';
import { UserModel } from './UserModel';
import { BankModel } from './BankModel';

export class UserBankDetailModel extends BaseModel {
    public userId: number;
    public user: UserModel;
    public bankId: number;
    public bank: BankModel;
    public accountName: string;
    public accountNumber: string;
    public bvn: string;
}