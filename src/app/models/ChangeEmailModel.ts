import { UserModel } from "./UserModel";

export class ChangeEmailModel {
    public userId: number;
    public user: UserModel;
    public oldEmail: string;
    public newEmail: string;
    public requestToken: string;
    public isApproved: boolean;
    public approvedVia: string;
    public approvedDate: Date;
    public status: boolean;
}

export class ChangeEmailFormModel {
    public userId: number;
    public newEmail: string;
}