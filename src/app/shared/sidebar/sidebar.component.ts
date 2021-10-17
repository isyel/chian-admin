import { Component, OnInit } from "@angular/core";
import { CommonMethods } from "src/app/app.common";
import { AuthDataModel } from "src/app/models/UserModel";
import { AuthenticationService } from "src/app/services/authentication/authentication.service";
import { UserData } from "src/app/user-data";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public uiBasicCollapsed = false;
  public samplePagesCollapsed = false;
  public advertPagesCollapsed = false;
  public transactionPagesCollapsed = false;
  public companiesPagesCollapsed = false;
  public authData: AuthDataModel;

  constructor(
    private _authService: AuthenticationService,
    public _common: CommonMethods,
    private userData: UserData
  ) {}

  ngOnInit() {
    this.authData = this.userData.getAuthorizationData();
    const body = document.querySelector("body");

    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll(".sidebar .nav-item").forEach(function (el) {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  }

  getAccountType(accountType) {
    return true;
  }
}
