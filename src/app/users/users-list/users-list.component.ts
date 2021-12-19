import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { CommonMethods } from "src/app/app.common";
import { RegisterModel } from "src/app/models/AuthModel";
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
  signupForm: FormGroup;
  userType = "Delivery Agent";
  userTypes = [
    { id: "User", name: "User" },
    { id: "Delivery Agent", name: "Delivery Agent" },
    { id: "Vendor", name: "Vendor" },
    { id: "Admin", name: "Admin" },
  ];
  userToDelete = null;

  constructor(
    public _authService: AuthenticationService,
    private router: Router,
    private _usersService: UsersService,
    public _common: CommonMethods,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    public commonMethods: CommonMethods
  ) {
    // if (!this._authService.isLoggedIn()) {
    //   this.router.navigate(["/user-pages/login"]);
    //   return;
    // }
    this.signupForm = this.formBuilder.group({
      fullName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      phoneNumber: ["", [Validators.required, Validators.minLength(11)]],
      referralId: ["admin", [Validators.required]],
      location: [""],
      vehicleNo: [""],
      pricePackage: [""],
      latitude: [""],
      longitude: [""],
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  openModal(exampleModalContent) {
    this.modalService.open(exampleModalContent, {
      size: "lg",
      beforeDismiss: () => false,
    });
  }

  openDeleteConfirmationModal(deleteUserConfirm, userId) {
    this.userToDelete = userId;
    this.modalService.open(deleteUserConfirm, { size: "sm" });
  }

  changeUserType(event) {
    console.log("Event: ", event);
  }

  checkFormValidity() {
    if (this.userType === "Delivery Agent") {
      return (
        this.signupForm.value.location === "" ||
        this.signupForm.value.vehicleNo === ""
      );
    } else if (this.userType === "Vendor") {
      return (
        this.signupForm.value.location === "" ||
        this.signupForm.value.latitude === "" ||
        this.signupForm.value.longitude === "" ||
        this.signupForm.value.pricePackage === ""
      );
    } else {
      return false;
    }
  }

  handleSignup(handleModalClose) {
    console.log(this.signupForm);
    const signupCredentials: RegisterModel = {
      fullName: this.signupForm.value.fullName,
      email: this.signupForm.value.email,
      phoneNumber: this.signupForm.value.phoneNumber,
      password: this.signupForm.value.password,
      referralId: this.signupForm.value.referralId || "",
      userType: this.userType,
      vehicleNo: this.signupForm.value.vehicleNo,
      pricePackage: this.signupForm.value.pricePackage,
    };
    this._authService.register(signupCredentials).subscribe(
      async (result) => {
        if (result.status) {
          console.log(result);
          handleModalClose.close();
          this.getUsers();
        } else {
          console.error(result);
        }
      },
      (error) => {
        console.error(this.commonMethods.hasErrorProperties(error));
      }
    );
  }

  getUsers(pageNumber = 0) {
    this.subscription = this._usersService.getAll().subscribe(
      (result) => {
        this.fullResult = result.data;
        this.users = result.data.data;
        console.log("this.users: ", this.users);
      },
      (error) => {
        console.log("Error: ", error);
      }
    );
  }

  goToSingleUserPage(userDetails: UserModel) {
    localStorage.setItem("userData", JSON.stringify(userDetails));
    this.router.navigate(["/users/user/" + userDetails._id]);
  }

  deleteUser(handleDeleteUser) {
    this.subscription = this._usersService.delete(this.userToDelete).subscribe(
      (result) => {
        console.log("Result of user delete: ", result);
        handleDeleteUser.close();
        this.users = this.users.filter(
          (user) => user._id !== this.userToDelete
        );
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
