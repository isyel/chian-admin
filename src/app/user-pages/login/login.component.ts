import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ForgotPasswordModel } from "src/app/models/AccountModel";
import { LoginModel } from "src/app/models/LoginModel";
import { AccountService } from "src/app/services/account/account.service";
import { AuthService } from "src/app/services/auth/auth.service";
import { NotificationsService } from "src/app/services/notifications/notifications.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginCredentials: LoginModel = new LoginModel();
  forgotPasswordCredentials: ForgotPasswordModel = new ForgotPasswordModel();
  loginForm: FormGroup;
  forgotPasswordForm: FormGroup;
  error: any;

  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private _accountService: AccountService,
    //public progress: NgProgress,
    private alert: NotificationsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      remember_me: [false],
    });

    this.forgotPasswordForm = this.fb.group({
      email_or_phonenumber: ["", Validators.required],
    });
  }

  onLogin(form: FormGroup) {
    // this.progress.start();
    this.loginCredentials["email/phone"] = this.loginForm.value.username;
    this.loginCredentials.password = this.loginForm.value.password;
    this.loginCredentials.rememberMe = this.loginForm.value.remember_me;
    this.loginCredentials.userType = "Admin";
    this._authService.login(this.loginCredentials).subscribe(
      (result) => {
        console.log("result: ", result);

        if (result.status) {
          // this.progress.complete();
          console.log("Login now");
          this._authService.clearLocalStorage();
          this._authService.setAuthData(result.data);
          this.alert.showSuccessMessage(
            '<i class="material-icons">check</i>Login successful'
          );
          this.router.navigate(["/dashboard"]);
        } else {
          // this.progress.complete();
          this.alert.showErrorMessage(result.message);
        }
      },
      (error) => {
        // this.progress.complete();
        this.error = error.error.title
          ? error.error.title
          : "Network or Server Error";
        this.alert.showErrorMessage(
          error.error.title ? error.error.title : "Network or Server Error"
        );
      }
    );
  }

  onForgetPassword(form: FormGroup) {
    // this.progress.start();
    this.forgotPasswordCredentials.phoneNumber =
      this.forgotPasswordCredentials.email =
        this.forgotPasswordForm.value.email_or_phonenumber;
    this._accountService
      .forgotPassword(this.forgotPasswordCredentials)
      .subscribe(
        (result) => {
          // this.progress.complete();
          if (!result.status) {
            this.alert.showErrorMessage(result.message);
            return;
          }
          console.log("onRecoverPassword: ", result);
          this.alert.showSuccessMessage(
            "Reset Code has been sent to your email address"
          );
        },
        (error) => {
          console.log("onRecoverPassword error data: ", error);
          // this.progress.complete();
          this.alert.showErrorMessage(error.statusText);
        },
        () => {}
      );
  }
}
