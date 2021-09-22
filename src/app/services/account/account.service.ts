import { Injectable } from "@angular/core";
import {
  ForgotPasswordModel,
  ChangePasswordModel,
  CheckAccountModel,
} from "src/app/models/AccountModel";
import { SetTransactionPinModel } from "src/app/models/SetTransactionPinModel";
import { ApiService } from "../api.service";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  _actionUrl: string = "Accounts/";

  constructor(private api: ApiService) {
    console.log("Hello AccountProvider Provider");
    this.api.setActionUrl(this._actionUrl);
  }

  //GET requests
  public userProfile(userId: number) {
    this.api.setActionUrl(this._actionUrl, "UserProfile");
    return this.api.getById(userId);
  }

  public emailActivation(userId: string, code: string) {
    let encodedURI = encodeURIComponent(code);
    console.log("Normal Code: ", code);
    console.log("Encoded URI: ", encodedURI);

    this.api.setActionUrl(
      this._actionUrl,
      `EmailActivation?UserId=${userId}&Code=${encodedURI}`
    );
    return this.api.getAll<any>();
  }

  //POST requests
  public resendEmailVerificationLink(identityId: string) {
    this.api.setActionUrl(
      this._actionUrl,
      "ResendEmailVerificationLink?identityId=" + identityId
    );
    return this.api.post<any>(identityId);
  }

  public forgotPassword(credentials: ForgotPasswordModel) {
    this.api.setActionUrl(this._actionUrl, "ForgotPassword");
    return this.api.post<any>(credentials);
  }

  public resetPassword(credentials: ChangePasswordModel) {
    this.api.setActionUrl(this._actionUrl, "ResetPassword");
    return this.api.post<any>(credentials);
  }

  public checkAccountExist(credentials: CheckAccountModel) {
    this.api.setActionUrl(this._actionUrl, "CheckAccountExist");
    return this.api.post<any>(credentials);
  }

  public setTransactionPin(credentials: SetTransactionPinModel) {
    this.api.setActionUrl(this._actionUrl, "SetTransactionPin");
    return this.api.post<any>(credentials);
  }
}
