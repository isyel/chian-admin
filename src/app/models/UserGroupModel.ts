


import { BaseModel } from './BaseModel';

export class UserGroupModel extends BaseModel {
    public name: string;
}

export class UserGroupFormModel {
    public id: number;
    public name: string;
    public createdDate: Date;
}

export class UserGroupTokenModel {
    public id: number;
    public name: string;
}

export class GroupRoleModel extends BaseModel {
    public userGroupId: number;
    public userGroup: UserGroupModel;
    public identityRoleId: string;
}