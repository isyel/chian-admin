import { PersonModel } from './PersonModel';
import { AccountTypeEnum } from './Enum/AccountTypeEnum';
import { UserGroupModel, UserGroupTokenModel } from './UserGroupModel';
import { GenderEnum } from './Enum/GenderEnum';
import { PlatformEnum } from './Enum/PlatformEnum';
import { LoginModeEnum } from './Enum/LoginModeEnum';

export class UserModel extends PersonModel {
    public identityId: string;
    public accountType: AccountTypeEnum;
    public userGroupId: number;
    public userGroup: UserGroupModel;
    public screenName: string;
    public gender: GenderEnum;
    public signupVia: PlatformEnum;
    public profilePhoto: string;
    public emailVerified: boolean;
    public emailVerifiedDate: Date;
    public lastLogin: Date;
    public smsCode: string;
    public facebook: string;
    public instagram: string;
    public linkedin: string;
    public twitter: string;
    public isActive: boolean;
    public acceptTerms: boolean;
    public avgRating: number;
    public registrationDate: Date;
    public city: string;
    public country: string;
    public latitude: number;
    public longitude: number;
    public loginType: LoginModeEnum;
    public password: string;
    public changePasswordToken: string;
    public emailActivationToken: string;
    public emailTokenExpires: Date;
    public banned: boolean;
    public bannedReason: string;
    public ipAddress: string;
    public tos: boolean;
    public modifiedBy: number;
}

export class UserFormModel {
    public id: number;
    public firstName: string;
    public lastName: string;
    public userGroupId: number;
    public email: string;
    public phoneNumber: string;
    public password: string;
    public screenName: string;
    public gender: GenderEnum;
    public signupVia: PlatformEnum;
    public profilePhoto: string;
    public facebook: string;
    public instagram: string;
    public linkedin: string;
    public twitter: string;
    public ipAddress: string;
    public roles: string[];
}

export class UserListModel {
    public id: number;
    public name: string;
}

export class AuthTokenModel {
    public id: number;
    public identityId: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public phoneNumber: string;
    public accountType: AccountTypeEnum;
    public emailVerified: boolean;
    public userGroupId: number;
    public userGroup: UserGroupTokenModel;
}

export class BlockUserModel {
    public id: number;
    public authorizedUserId: number;
    public status: boolean;
    public reason: string;
}