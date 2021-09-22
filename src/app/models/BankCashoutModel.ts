


import { BaseModel } from './BaseModel';
import { UserModel } from './UserModel';

export class BankCashoutModel extends BaseModel {
    public userId: number;
    public user: UserModel;
    public amount: number;
    public referenceNumber: string;
    public cashoutDate: Date;
    public status: boolean;
    public details: string;
}