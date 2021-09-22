import { Component, OnInit } from "@angular/core";
import { CommonMethods } from "src/app/app.common";
import { AccountTypeEnum } from "src/app/models/Enum/AccountTypeEnum";
import { UserModel } from "src/app/models/UserModel";
import { AuthService } from "src/app/services/auth/auth.service";

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
  public userDetails: UserModel;

  constructor(
    private _authService: AuthService,
    public _common: CommonMethods
  ) {}

  ngOnInit() {
    this.userDetails = this._authService.userData;
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
    return AccountTypeEnum[AccountTypeEnum[accountType]];
  }
}
