


import { BaseModel } from './BaseModel';

export class IndustryModel extends BaseModel {
    public name: string;
    public featured: boolean;
    public isActive: boolean;
    public icon: string;
}

export class IndustryListModel {
    public id: number;
    public name: string;
}

export class IndustryFormModel {
    public id: number;
    public name: string;
    public featured: boolean;
    public isActive: boolean;
    public icon: string;
    public createdDate: Date;
}