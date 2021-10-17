import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ForgotPasswordModel, LoginModel } from "src/app/models/AuthModel";
import { AuthenticationService } from "src/app/services/authentication/authentication.service";
import { NotificationsService } from "src/app/services/notifications/notifications.service";
import { UserData } from "src/app/user-data";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginCredentials: LoginModel;
  forgotPasswordCredentials: ForgotPasswordModel;
  loginForm: FormGroup;
  forgotPasswordForm: FormGroup;
  error: any;

  constructor(
    private fb: FormBuilder,
    private _authService: AuthenticationService,
    private userData: UserData,
    private alert: NotificationsService,
    private router: Router
  ) {
    if (this.userData.isLoggedIn) {
      this.router.navigate(["/dashboard"]);
      return;
    }
  }

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
    this.loginCredentials = {
      emailOrPhoneNumber: this.loginForm.value.username,
      password: this.loginForm.value.password,
      userType: "Admin",
    };
    this._authService.login(this.loginCredentials).subscribe(
      (result) => {
        console.log("result: ", result);

        if (result.status) {
          // this.progress.complete();
          console.log("Login now");
          this.userData.setAuthorizationData(result.data);
          console.log('<i class="material-icons">check</i>Login successful');
          this.router.navigate(["/dashboard"]);
        } else {
          // this.progress.complete();
          console.error(result.message);
        }
      },
      (error) => {
        // this.progress.complete();
        this.error = error.error.title
          ? error.error.title
          : "Network or Server Error";
        console.error(
          error.error.title ? error.error.title : "Network or Server Error"
        );
      }
    );
  }

  onForgetPassword(form: FormGroup) {
    // this.progress.start();
    this.forgotPasswordCredentials.email =
      this.forgotPasswordCredentials.email =
        this.forgotPasswordForm.value.email_or_phonenumber;
    this._authService.forgotPassword(this.forgotPasswordCredentials).subscribe(
      (result) => {
        // this.progress.complete();
        if (!result.status) {
          console.error(result.message);
          return;
        }
        console.log("onRecoverPassword: ", result);
        console.log("Reset Code has been sent to your email address");
      },
      (error) => {
        console.log("onRecoverPassword error data: ", error);
        // this.progress.complete();
        console.error(error.statusText);
      },
      () => {}
    );
  }
}
