import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { CommonMethods } from "src/app/app.common";
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
  userType = null;
  userUpdateForm: FormGroup;
  userTypes = [
    { id: "User", name: "User" },
    { id: "Delivery Agent", name: "Delivery Agent" },
    { id: "Vendor", name: "Vendor" },
    { id: "Admin", name: "Admin" },
  ];

  constructor(
    private route: ActivatedRoute,
    private _usersService: UsersService,
    private formBuilder: FormBuilder,
    public commonMethods: CommonMethods
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let userId = params["id"];
      // In a real app: dispatch action to load the details here.
      this.getUserDetails(userId);
      this.userUpdateForm = this.formBuilder.group({
        fullName: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        phoneNumber: ["", [Validators.required, Validators.minLength(11)]],
        referralId: ["", [Validators.required]],
        address: [""],
        vehicleNo: [""],
        pricePackage: [""],
        latitude: [""],
        longitude: [""],
      });
    });
  }

  getUserDetails(userId) {
    console.log("userId: ", userId);

    this.loading = true;
    this.subscription = this._usersService.getProfile(userId).subscribe(
      (result) => {
        this.userDetails = result.data;
        this.populateUserData();
        this.loading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  populateUserData() {
    this.userUpdateForm.setValue({
      fullName: this.userDetails.fullName,
      email: this.userDetails.email,
      password: "",
      phoneNumber: this.userDetails.phoneNumber,
      referralId: this.userDetails.email,
      address: this.userDetails.address || "",
      vehicleNo: this.userDetails.vehicleNo || "",
      pricePackage: this.userDetails.pricePackage || "",
      latitude: this.userDetails.latitude || "",
      longitude: this.userDetails.longitude || "",
    });
    this.userType = this.userDetails.roles[0];
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
