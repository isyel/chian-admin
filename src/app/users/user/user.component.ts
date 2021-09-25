import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { UserModel } from "src/app/models/UserModel";
import { UsersService } from "src/app/services/users/users.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  userDetails: UserModel;
  loading: boolean;
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private _usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let userId = +params["id"]; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.getUserDetails(userId);
    });
  }

  getUserDetails(userId) {
    this.loading = true;
    this.subscription = this._usersService.getProfile(userId).subscribe(
      (result) => {
        this.userDetails = result;
        this.loading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
