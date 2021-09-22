


import { BaseModel } from './BaseModel';

export class AuthSmsModel extends BaseModel {
    public phoneNumber: string;
    public smsCode: string;
    public smsStatus: string;
    public isValidated: boolean;
}