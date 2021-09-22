


import { BaseModel } from './BaseModel';
import { UserModel } from './UserModel';

export class BankModel extends BaseModel {
    public name: string;
    public code: string;
    public sortCode: string;
    public creatorId: number;
    public creator: UserModel;
    public editorId: number;
    public editor: UserModel;
}

export class BankListModel {
    public id: number;
    public name: string;
    public code: string;
    public sortCode: string;
}

export class BankFormModel {
    public id: number;
    public name: string;
    public code: string;
    public sortCode: string;
    public createdDate: Date;
    public creatorId: number;
    public editorId: number;
}