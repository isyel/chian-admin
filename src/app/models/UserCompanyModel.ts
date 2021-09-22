


import { BaseModel } from './BaseModel';
import { UserModel } from './UserModel';
import { CompanyModel } from './CompanyModel';

export class UserCompanyModel extends BaseModel {
    public userId: number;
    public user: UserModel;
    public companyId: number;
    public company: CompanyModel;
}