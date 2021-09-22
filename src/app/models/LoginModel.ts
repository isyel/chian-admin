import { PlatformEnum } from "./Enum/PlatformEnum";

export class LoginModel {
  public username: string;
  public password: string;
  public rememberMe: boolean;
  public userType: string;
  public channel: PlatformEnum = PlatformEnum.web;
}

export class ReissueTokenModel {
  public token: string;
  public refreshToken: string;
}

export class LogoutModel {
  public userId: number;
}
