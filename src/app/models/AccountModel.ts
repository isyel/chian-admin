import { PlatformEnum } from "./Enum/PlatformEnum";

export class AccountModel{
}

export class ChangePasswordModel {
    public platform: PlatformEnum;
    public email: string;
    public otpCode: string;
    public password: string;
    public confirmPassword: string;
}

export class ExternalLoginModel {
    public provider: string;
    public id: string;
    public email: string;
    public phoneNumber: string;
    public displayName: string;
    public firstName: string;
    public lastName: string;
    public idToken: string;
    public accessToken: string;
    public pictureUrl: string;
    public providerKey: string;
    public platform: PlatformEnum;
}

export class ForgotPasswordModel {
    public platform: PlatformEnum = PlatformEnum.mobile;
    public email: string;
    public phoneNumber: string;
}

export class CheckAccountModel {
    public platform: PlatformEnum;
    public email: string;
    public phoneNumber: string;
}