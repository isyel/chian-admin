import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  NotificationModel,
  PushNoticeModel,
} from "src/app/models/NotificationModel";
import { ApiService } from "../api.service";

@Injectable({
  providedIn: "root",
})
export class NotificationsService {
  _actionUrl = "Notifications/";

  constructor(public _service: ApiService) {
    _service.actionUrl = this._actionUrl;
  }

  showDefaultMessage(message: string, duration?, styles?) {
    // toast(
    //   message,
    //   duration || 4000,
    //   styles || ''
    // );
  }

  showErrorMessage(message: string, duration?) {
    // toast(
    //   message,
    //   duration || 4000,
    //   'red darken-1 z-depth-0'
    // );
  }

  showSuccessMessage(message: string, duration?) {
    // toast(
    //   message,
    //   duration || 4000,
    //   'green darken-1 z-depth-0'
    // );
  }

  showEmailVerificationError() {
    this.showErrorMessage(
      "You need to verify your account to continue, check your email"
    );
  }

  /**
   * Gets Notification by notification Id
   *
   * @param {number} notificationId
   * @returns NotificationModel
   * @memberof NotificationService
   */
  public getById(notificationId: number) {
    if (notificationId == undefined || notificationId == null) {
      return this._service.handleError("Invalid Request");
    } else {
      this._service.setActionUrl(
        this._actionUrl,
        "GetByUserId/" + notificationId
      );
      return this._service.getAll<NotificationModel>();
    }
  }

  /**
   * Gets Notification details using user ID
   *
   * @param {number} userId
   * @returns any
   * @memberof NotificationService
   */
  public getByUser(userId: number) {
    if (userId == undefined || userId == null) {
      return this._service.handleError("Invalid Request");
    } else {
      this._service.setActionUrl(this._actionUrl, "GetByUserId/" + userId);
      return this._service.getAll<any>();
    }
  }

  /**
   * Gets Notification details using user ID
   *
   * @param {number} notificationId
   * @returns any
   * @memberof NotificationService
   */
  public markAsSeen(notificationId: number) {
    if (notificationId == undefined || notificationId == null) {
      return this._service.handleError("Invalid Request");
    } else {
      this._service.setActionUrl(this._actionUrl, "Seen/" + notificationId);
      return this._service.getAll<any>();
    }
  }

  /**
   * Test Push Notifications
   *
   * @param {PushNoticeModel} pushNoticeData
   * @returns any
   * @memberof NotificationService
   */
  public testPushNotifications(pushNoticeData: PushNoticeModel) {
    this._service.setActionUrl(this._actionUrl, "TestPushNotification/");
    return this._service.getAll<any>();
  }

  /**
   * Deletes a Notification
   *
   * @param {number} id
   * @returns any
   * @memberof NotificationService
   */
  public delete(id: number) {
    if (!id) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      return this._service.delete<any>(id);
    }
  }
}
