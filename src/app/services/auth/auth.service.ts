import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";
import { LoginModel, ReissueTokenModel } from "src/app/models/LoginModel";
import { RegisterModel } from "src/app/models/RegisterModel";
import { UserModel } from "src/app/models/UserModel";
import { ApiService } from "../api.service";
import { NotificationsService } from "../notifications/notifications.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isSignupFormSubmitted = false;
  _actionUrl = "user/";
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    public _service: ApiService,
    private router: Router,
    private alert: NotificationsService
  ) {
    _service.actionUrl = this._actionUrl;
  }

  public login(credentials: LoginModel) {
    if (!credentials) {
      return Observable.throw({ message: "Please enter your login details" });
    } else {
      this._service.actionUrl = this._actionUrl + "login";
      return this._service.post<any>(credentials);
    }
  }

  public register(credentials: RegisterModel) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw({ message: "Please fill in your details" });
    } else {
      this._service.actionUrl = this._actionUrl + "register";
      return this._service.post<any>(credentials);
    }
  }

  public RefreshToken(refreshTokenData: ReissueTokenModel) {
    this._service.setActionUrl(this._actionUrl, "refreshToken");
    return this._service.post<any>(refreshTokenData).toPromise();
  }

  public socialAuthentication = (data) => {
    this._service.setActionUrl("socialLogin");
    return this._service.post<any>(data);
  };

  logout() {
    this.clearLocalStorage();
    this.router.navigate(["/logout"]);
  }

  saveToken(result) {
    localStorage.setItem("token", result.token);
    localStorage.setItem("refresh-token", result.refresh_token);
    this.setUserData();
  }

  clearLocalStorage() {
    localStorage.clear();
  }

  decodeToken(token) {
    if (
      !token ||
      typeof token === "undefined" ||
      token == null ||
      token == "undefined"
    ) {
      return null;
    } else {
      return this.jwtHelper.decodeToken(token);
    }
  }

  getUserData(result) {
    let authTokenData = this.decodeToken(result.token).UserData;
    return JSON.parse(authTokenData);
  }

  setUserData(): void {
    let authTokenData = this.decodeToken(
      localStorage.getItem("token")
    ).UserData;
    localStorage.setItem("userData", JSON.stringify(JSON.parse(authTokenData)));
  }

  setAuthData(authData): void {
    localStorage.setItem("authData", JSON.stringify(authData));
  }

  getAuthData() {
    let authData = localStorage.getItem("token");
    return JSON.parse(authData);
  }

  isLoggedIn() {
    return !this.isTokenExpired();
  }

  isTokenExpired() {
    let token = localStorage.getItem("token");

    if (
      !token ||
      typeof token === "undefined" ||
      token == null ||
      token == "undefined"
    ) {
      return true;
    } else {
      return this.jwtHelper.isTokenExpired(token);
    }
  }

  get currentUser(): UserModel {
    const token = localStorage.getItem("token");
    if (
      !token ||
      typeof token === "undefined" ||
      token == null ||
      token == "undefined"
    ) {
      return null;
    } else {
      return this.jwtHelper.decodeToken(token);
    }
  }

  get userData(): UserModel {
    return JSON.parse(localStorage.getItem("userData"));
  }

  public isEmailVerified(notify = true) {
    let currentUser = JSON.parse(localStorage.getItem("userData"));
    if (currentUser != null && currentUser.emailVerified) {
      return true;
    } else {
      notify
        ? this.alert.showErrorMessage(
            '<i class="material-icons">error_outline</i>Email Requires Verification'
          )
        : "";
      return false;
    }
  }
}
