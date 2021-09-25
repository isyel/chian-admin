import { Component, OnInit } from "@angular/core";
import { NgbDropdownConfig } from "@ng-bootstrap/ng-bootstrap";
import { CommonMethods } from "src/app/app.common";
import { UserModel } from "src/app/models/UserModel";
import { AuthenticationService } from "src/app/services/authentication/authentication.service";
import { UserData } from "src/app/user-data";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  providers: [NgbDropdownConfig],
})
export class NavbarComponent implements OnInit {
  public iconOnlyToggled = false;
  public sidebarToggled = false;
  public userDetails: UserModel;

  constructor(
    config: NgbDropdownConfig,
    private _authService: AuthenticationService,
    private userData: UserData,
    public _common: CommonMethods
  ) {
    config.placement = "bottom-right";
  }

  ngOnInit() {
    this.userDetails = this.userData.getUserData();
  }

  // toggle sidebar in small devices
  toggleOffcanvas() {
    document.querySelector(".sidebar-offcanvas").classList.toggle("active");
  }

  // toggle sidebar
  toggleSidebar() {
    let body = document.querySelector("body");
    if (
      !body.classList.contains("sidebar-toggle-display") &&
      !body.classList.contains("sidebar-absolute")
    ) {
      this.iconOnlyToggled = !this.iconOnlyToggled;
      if (this.iconOnlyToggled) {
        body.classList.add("sidebar-icon-only");
      } else {
        body.classList.remove("sidebar-icon-only");
      }
    } else {
      this.sidebarToggled = !this.sidebarToggled;
      if (this.sidebarToggled) {
        body.classList.add("sidebar-hidden");
      } else {
        body.classList.remove("sidebar-hidden");
      }
    }
  }

  // toggle right sidebar
  // toggleRightSidebar() {
  //   document.querySelector('#right-sidebar').classList.toggle('open');
  // }
  logout() {
    console.log("logout");
  }
}
