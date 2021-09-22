import { PlatformEnum } from "./Enum/PlatformEnum";
import { LoginModeEnum } from "./Enum/LoginModeEnum";

export class RegisterModel {
    public userGroupId: number = 1;
    public firstName: string;
    public lastName: string;
    public phoneNumber: string;
    public email: string;
    public password: string;
    public confirmPassword: string;
    public signupVia: PlatformEnum = PlatformEnum.web;
    public loginMode: LoginModeEnum;
}

export class PhoneVerficationModel {
    public phoneNumber: string;
    public smsCode: string;
}