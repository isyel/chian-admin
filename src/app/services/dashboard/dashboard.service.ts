import { Injectable } from "@angular/core";
import { BaseServiceService } from "../base-service.service";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  actionUrl = "dashboard/";

  constructor(public service: BaseServiceService) {}

  /**
   * Register User
   *
   * @param payload
   * @returns UserModel
   * @memberof AuthenticationService
   */
  public getAll() {
    this.service.setActionUrl(this.actionUrl, "Register");
    return this.service.getAll<any>();
  }
}
