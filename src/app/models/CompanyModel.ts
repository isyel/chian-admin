


import { BaseModel } from './BaseModel';

export class CompanyModel extends BaseModel {
    public industryId: number;
    public industry: IndustryModel;
    public userid: number;
    public user: UserModel;
    public businessName: string;
    public companySummary: string;
    public city: string;
    public country: string;
    public companyLevel: string;
    public employeeCapacity: number;
    public website: string;
    public logo: string;
    public businessEmail: string;
    public phoneNumber: string;
    public linkedin: string;
    public twitter: string;
    public facebook: string;
    public isActive: boolean;
}

export class CompanyListModel {
    public id: number;
    public businessName: string;
}

import { IndustryModel } from './IndustryModel';
import { UserModel } from './UserModel';

export class CompanyFormModel {
    public id: number;
    public industryId: number;
    public userId: number;
    public businessName: string;
    public companySummary: string;
    public city: string;
    public country: string;
    public companyLevel: string;
    public employeeCapacity: number;
    public website: string;
    public logo: any;
    public businessEmail: string;
    public phoneNumber: string;
    public linkedin: string;
    public twitter: string;
    public facebook: string;
    public isActive: boolean = true;
}

export class UserCompanyFormModel {
    public userId: number;
    public companyId: number;
}