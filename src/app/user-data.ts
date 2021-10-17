import { Injectable } from "@angular/core";
import { NotificationModel } from "./models/NotificationModel";
import { OptionsModel } from "./models/OptionsModel";
import { OrderModel, OrderModelPayload } from "./models/OrderModel";
import { AuthDataModel, UserModel } from "./models/UserModel";

@Injectable({
  providedIn: "root",
})
export class UserData {
  hasSeenTutorial = "HAS_SEEN_TUTORIAL";
  authData = "AUTH_DATA";
  loggedIn = "LOGGED_IN";
  orderHistory = "ORDER_HISTORY";
  pendingOrder = "PENDING_ORDER";
  pushNotificationStatus = "PUSH_NOTIFICATION_STATUS";
  emailNotificationStatus = "EMAIL_NOTIFICATION_STATUS";
  notifications = "NOTIFICATIONS";
  userData = "USER_DATA";
  options = "OPTIONS";

  constructor() {}

  checkHasSeenTutorial(): boolean {
    return JSON.parse(localStorage.getItem(this.hasSeenTutorial));
  }

  setHasSeenTutorial() {
    return localStorage.setItem(this.hasSeenTutorial, JSON.stringify(true));
  }

  getAuthorizationData(): AuthDataModel {
    return JSON.parse(localStorage.getItem(this.authData));
  }

  setAuthorizationData(data: AuthDataModel) {
    this.setisLoggedIn(true);
    return localStorage.setItem(this.authData, JSON.stringify(data));
  }

  getUserData(): UserModel {
    return JSON.parse(localStorage.getItem(this.userData));
  }

  setUserData(userData: UserModel) {
    this.setisLoggedIn(true);
    return localStorage.setItem(this.userData, JSON.stringify(userData));
  }

  get isLoggedIn(): boolean {
    return JSON.parse(localStorage.getItem(this.loggedIn));
  }

  setisLoggedIn(loginStatus: boolean) {
    if (!loginStatus) {
      localStorage.clear();
      this.setHasSeenTutorial();
    }
    return localStorage.setItem(this.loggedIn, JSON.stringify(loginStatus));
  }

  getOptions(): OptionsModel[] {
    return JSON.parse(localStorage.getItem(this.options));
  }

  setOptions(options: OptionsModel[]) {
    return localStorage.setItem(this.options, JSON.stringify(options));
  }

  getOrderHistory(): OrderModel[] {
    return JSON.parse(localStorage.getItem(this.orderHistory));
  }

  setOrderHistory(orderHistory: OrderModel[]) {
    return localStorage.setItem(
      this.orderHistory,
      JSON.stringify(orderHistory)
    );
  }

  getPendingOrder(): OrderModel {
    return JSON.parse(localStorage.getItem(this.pendingOrder));
  }

  setPendingOrder(pendingOrder: OrderModelPayload) {
    return localStorage.setItem(
      this.pendingOrder,
      JSON.stringify(pendingOrder)
    );
  }

  getPushNotificationStatus(): boolean {
    return JSON.parse(localStorage.getItem(this.pushNotificationStatus));
  }

  setPushNotificationStatus(pushNotificationStatus: boolean) {
    return localStorage.setItem(
      this.pushNotificationStatus,
      JSON.stringify(pushNotificationStatus)
    );
  }

  getEmailNotificationStatus(): boolean {
    return JSON.parse(localStorage.getItem(this.emailNotificationStatus));
  }

  setEmailNotificationStatus(emailNotificationStatus: boolean) {
    return localStorage.setItem(
      this.emailNotificationStatus,
      JSON.stringify(emailNotificationStatus)
    );
  }

  getNotifications(): NotificationModel[] {
    return JSON.parse(localStorage.getItem(this.notifications));
  }

  setNotifications(notifications: NotificationModel[]) {
    return localStorage.setItem(
      this.notifications,
      JSON.stringify(notifications)
    );
  }

  logout() {
    localStorage.clear();
  }
}
