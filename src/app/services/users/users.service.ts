import { Injectable } from "@angular/core";
import { ResultModel } from "src/app/models/ResultModel";
import { BaseServiceService } from "../base-service.service";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  actionUrl = "user/";

  constructor(public service: BaseServiceService) {}

  /**
   * Get User Profile
   *
   * @returns UserModel[]
   * @memberof UsersService
   */
  public getAll() {
    this.service.setActionUrl(this.actionUrl);
    return this.service.getAll<ResultModel>();
  }

  /**
   * Get User Profile
   *
   * @param userId
   * @returns UserModel
   * @memberof UsersService
   */
  public getProfile(userId: string) {
    this.service.setActionUrl(this.actionUrl);
    return this.service.getById<any>(userId);
  }

  /**
   * Update User Profile
   *
   * @param payload
   * @returns UserModel
   * @memberof UsersService
   */
  public updateProfile(userId: string, payload: any) {
    this.service.setActionUrl(this.actionUrl);
    return this.service.patchUpdate<ResultModel>(userId, payload);
  }
}
