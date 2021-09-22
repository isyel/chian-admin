import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PaymentModel } from "src/app/models/PaymentModel";
import { PaymentPostModel } from "src/app/models/PostPaymentData";
import { RemoveCardModel } from "src/app/models/RemoveCardModel";
import { VerifyPaymentModel } from "src/app/models/VerifyPaymentModel";
import { ApiService } from "../api.service";

@Injectable({
  providedIn: "root",
})
export class PaymentsService {
  _actionUrl: string = "Payments/";

  constructor(public _service: ApiService) {
    console.log("Hello PaymentsService Provider");
    _service.actionUrl = this._actionUrl;
  }

  /**
   * Initiate Payment
   *
   * @param {PaymentModel} initiateData
   * @returns any
   * @memberof PaymentsService
   */
  public initiatePayment(initiateData: PaymentModel) {
    if (!initiateData) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.actionUrl = this._actionUrl + "Initiate";
      return this._service.post<any>(initiateData);
    }
  }

  /**
   * Post Payment
   *
   * @param {PaymentModel} initiateData
   * @returns any
   * @memberof PaymentsService
   */
  public postPayment(postPaymentData: PaymentPostModel) {
    if (!postPaymentData) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.actionUrl = this._actionUrl + "PostPayment";
      return this._service.post<any>(postPaymentData);
    }
  }

  /**
   * Verify Payment
   *
   * @param {PaymentModel} initiateData
   * @returns any
   * @memberof PaymentsService
   */
  public verifyPayment(paymentData: VerifyPaymentModel) {
    if (!paymentData) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.actionUrl = this._actionUrl + "VerifyPayment";
      return this._service.post<any>(paymentData);
    }
  }

  /**
   * Get Users Cards
   *
   * @param {number} userId
   * @returns any
   * @memberof PaymentsService
   */
  public getUserCards(userId: number) {
    if (!userId) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.actionUrl = this._actionUrl + "GetUserCards/";
      return this._service.getByUser<any>(userId);
    }
  }

  /**
   * Get Users Cards
   *
   * @param {RemoveCardModel} removeCardData
   * @returns any
   * @memberof PaymentsService
   */
  public removeUserCard(removeCardData: RemoveCardModel) {
    if (!removeCardData) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.actionUrl = this._actionUrl + "RemoveUserCard";
      return this._service.post<any>(removeCardData);
    }
  }
}
