import { Injectable } from "@angular/core";
import { AppConfig } from "./services/app-config";
import { SettingsService } from "./services/settings/settings.service";

/**
 *  Helper class for commonly used methods
 *
 * @export
 * @class CommonMethods
 */
@Injectable()
export class CommonMethods {
  categories: any;
  private _notificationCount: number;
  registerBackButton: Function;
  loading: boolean;
  mybsUnit: number;

  constructor(private config: AppConfig) {}

  createAlert(message = "", title = "", subTitle = "", buttonText = "OK") {
    // return this.alertCtrl.create({
    //   title: title,
    //   subTitle: subTitle,
    //   message: message,
    //   buttons: [
    //     {
    //       text: buttonText,
    //     },
    //   ],
    // });
  }

  createLoader(content = "", cssClass = "") {
    // this.registerBackButton = this.handleBackButton();
    // this.loading = this.loadingCtrl.create({
    //   content: content,
    //   cssClass: cssClass,
    // });
    // this.loading.didLeave.subscribe(() => this.registerBackButton());
    // return this.loading;
  }

  updatePushSettings(value: boolean) {
    return localStorage.setItem("allowPush", JSON.stringify(value));
  }

  getPushSettings() {
    return localStorage.getItem("allowPush");
  }

  createSuccessToast(content = "", cssClass = "success-toast") {
    // return this.toastCtrl.create({
    //   message: content,
    //   duration: 3000,
    //   cssClass: cssClass,
    // });
  }

  createErrorToast(content = "", cssClass = "error-toast") {
    // return this.toastCtrl.create({
    //   message: content,
    //   duration: 3000,
    //   cssClass: cssClass,
    // });
  }

  public get notificationCount(): number {
    return this._notificationCount;
  }

  public set notificationCount(value: number) {
    this._notificationCount = value;
  }

  /**
   * Handles error response, check if it's a network error
   *
   * @param {any} error
   * @returns any
   * @memberof CommonMethods
   */
  hasErrorProperties(error: any) {
    if (
      error.error !== null &&
      error.error.hasOwnProperty("message") &&
      error.error.hasOwnProperty("status")
    ) {
      console.log(
        "In hasErrorProperties(message and status from error.error): ",
        error.error.message
      );

      return error.error.message;
    } else if (
      error !== null &&
      error.hasOwnProperty("message") &&
      error.hasOwnProperty("status")
    ) {
      console.log(
        "In hasErrorProperties(message and status from error): ",
        error.message
      );
      return "Network error, check connection";
    } else if (
      error.error !== null &&
      !error.error.hasOwnProperty("status") &&
      error.error.hasOwnProperty("message")
    ) {
      console.log(
        "In hasErrorProperties(message and no status from error.error): ",
        error.error.message
      );
      return error.error.message;
    } else {
      return "Network Or Server Error";
    }
  }

  /**
   * Converts naira to mybs
   *
   * @param {number} amount
   * @returns number
   * @memberof CommonMethods
   */
  public nairaToMybs(amount: number) {
    if (amount !== null && amount !== 0 && !isNaN(amount) && this.mybsUnit) {
      return this.floorToNearestDecimal(amount / this.mybsUnit, 3);
    } else {
      return 0;
    }
  }

  /**
   * Converts mybs to naira
   *
   * @param {number} amount
   * @returns number
   * @memberof CommonMethods
   */
  public mybsToNaira(amount: number) {
    if (amount !== null && amount !== 0 && !isNaN(amount) && this.mybsUnit) {
      return this.floorToNearestDecimal(amount * this.mybsUnit, 3);
    } else {
      return 0;
    }
  }

  public floorToNearestDecimal(value, decimal) {
    return Number(
      Math.floor(parseFloat(value + "e" + decimal)) + "e-" + decimal
    );
  }

  showImage(imageUrl) {
    if (imageUrl.includes("googleusercontent")) return imageUrl;
    return this.config.resourceUrl + imageUrl;
  }
}
