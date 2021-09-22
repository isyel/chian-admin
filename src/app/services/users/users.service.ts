import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  UserModel,
  UserFormModel,
  BlockUserModel,
} from "src/app/models/UserModel";
import { ApiService } from "../api.service";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  _actionUrl: string = "Users/";
  data: UserModel[];

  constructor(public _service: ApiService) {
    console.log("Hello UserServiceProvider Provider");
    _service.actionUrl = this._actionUrl;
  }

  public getAll(pageNumber = 0) {
    this._service.setActionUrl(this._actionUrl);
    return this._service.getAll<any>(pageNumber);
  }

  public getById(id: number) {
    if (!id) {
      return this._service.handleError("Invalid Request");
    } else {
      this._service.setActionUrl(this._actionUrl);
      return this._service.getById<any>(id);
    }
  }

  public addNewUser(formData: UserFormModel) {
    if (!formData) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(this._actionUrl);
      return this._service.post<any>(formData);
    }
  }

  public getUsersBySearch(searchKeyword: string = "") {
    this._service.setActionUrl(
      this._actionUrl,
      "Search/?SearchKeyword=" + searchKeyword
    );
    return this._service.getAll<any>();
  }

  public getProfilePhoto(userId: number) {
    if (!userId) {
      return this._service.handleError("Invalid Request");
    } else {
      this._service.setActionUrl(this._actionUrl, "GetProfilePhoto/");
      return this._service.getById<any>(userId);
    }
  }

  public uploadProfilePicture(formData: any) {
    if (!formData) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(this._actionUrl, "SetProfilePhoto");
      return this._service.post<any>(formData);
    }
  }

  public blockUser(formData: BlockUserModel) {
    if (!formData) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(this._actionUrl, "BlockUser");
      return this._service.post<any>(formData);
    }
  }

  /**
   * Edit User Details
   *
   * @param {number} userId
   * @param {any} formData
   * @returns any
   * @memberof UserService
   */
  public editUser(id: number, formData: any) {
    if (!formData || !id) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(this._actionUrl);
      return this._service.update<any>(id, formData);
    }
  }

  /**
   * Delete User Details
   *
   * @param {number} userId
   * @returns any
   * @memberof UserService
   */
  public deleteUser(userId: number) {
    if (!userId) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      return this._service.delete<any>(userId);
    }
  }
}
