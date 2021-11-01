import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { CommonMethods } from "src/app/app.common";
import { RegisterModel } from "src/app/models/AuthModel";
import { UserModel } from "src/app/models/UserModel";
import { AuthenticationService } from "src/app/services/authentication/authentication.service";
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
  response: any;
  error: any;

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
        password: ["", [Validators.minLength(6)]],
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

  updateUserData() {
    console.log(this.userUpdateForm);
    this.response = this.error = null;
    const signupCredentials: RegisterModel = {
      fullName: this.userUpdateForm.value.fullName,
      email: this.userUpdateForm.value.email,
      phoneNumber: this.userUpdateForm.value.phoneNumber,
      password: this.userUpdateForm.value.password,
      referralId: this.userUpdateForm.value.referralId || "",
      userType: this.userType,
      location: this.userUpdateForm.value.location,
      latitude: this.userUpdateForm.value.latitude,
      longitude: this.userUpdateForm.value.longitude,
      vehicleNo: this.userUpdateForm.value.vehicleNo,
      pricePackage: this.userUpdateForm.value.pricePackage,
    };
    this._usersService
      .updateProfile(this.userDetails._id, signupCredentials)
      .subscribe(
        async (result) => {
          if (result.status) {
            console.log(result);
            this.response = "User Data Successfully Updated";
          } else {
            console.error(result);
            this.response.error = "Error updating user data";
          }
        },
        (error) => {
          this.error = error.message || "Could not update user data";
          console.error(this.commonMethods.hasErrorProperties(error));
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
