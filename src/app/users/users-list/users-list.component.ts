import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { CommonMethods } from "src/app/app.common";
import { ResultModel } from "src/app/models/ResultModel";
import { UserModel } from "src/app/models/UserModel";
import { AuthenticationService } from "src/app/services/authentication/authentication.service";
import { UsersService } from "src/app/services/users/users.service";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"],
})
export class UsersListComponent implements OnInit {
  users: UserModel[];
  private subscription: Subscription;
  noOfPages: any;
  fullResult: ResultModel;

  constructor(
    public _authService: AuthenticationService,
    private router: Router,
    private _usersService: UsersService,
    public _common: CommonMethods
  ) {
    // if (!this._authService.isLoggedIn()) {
    //   this.router.navigate(["/user-pages/login"]);
    //   return;
    // }
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(pageNumber = 0) {
    this.subscription = this._usersService.getAll().subscribe(
      (result) => {
        this.fullResult = result;
        this.users = result.data;
      },
      (error) => {
        console.log("Error: ", error);
      }
    );
  }

  goToSpecificPage(event) {
    console.log("goToSpecificPage, event is: ", event);
    this.getUsers(+event - 1);
    //this.fetchNewPage(page);
  }

  isAccountCompany(name) {
    return true;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
