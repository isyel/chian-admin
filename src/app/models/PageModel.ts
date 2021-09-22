


import { BaseModel } from './BaseModel';
import { UserModel } from './UserModel';

export class PageModel extends BaseModel {
    public title: string;
    public slug: string;
    public content: string;
    public userId: number;
    public user: UserModel;
}