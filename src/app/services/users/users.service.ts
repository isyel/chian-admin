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
    this.service.setActionUrl(this.actionUrl, "get-one/");
    return this.service.getById<any>(userId);
  }

  /**
   * Get Vendors List
   *
   * @param pageNumber
   * @returns ResultModel
   * @memberof UsersService
   */
  public getVendorsList(pageNumber = 1) {
    this.service.setActionUrl(this.actionUrl, "all-vendors/");
    return this.service.getAllPaginate<any>(pageNumber);
  }

  /**
   * Get Agents List
   *
   * @param pageNumber
   * @returns ResultModel
   * @memberof UsersService
   */
  public getDeliveryAgentsList(pageNumber = 1) {
    this.service.setActionUrl(this.actionUrl, "all-deliveryagents/");
    return this.service.getAllPaginate<any>(pageNumber);
  }

  /**
   * Update User Profile
   *
   * @param userId
   * @param payload
   * @returns UserModel
   * @memberof UsersService
   */
  public updateProfile(userId: string, payload: any) {
    this.service.setActionUrl(this.actionUrl);
    return this.service.patchUpdate<ResultModel>(userId, payload);
  }

  /**
   * Delete User Profile
   *
   * @param userId
   * @returns UserModel
   * @memberof UsersService
   */
  public delete(userId: string) {
    this.service.setActionUrl(this.actionUrl);
    return this.service.delete<ResultModel>(userId);
  }
}
