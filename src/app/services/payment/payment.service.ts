import { Injectable } from "@angular/core";
import { PaymentModel } from "src/app/models/PaymentModel";
import { ResultModel } from "src/app/models/ResultModel";
import { BaseServiceService } from "../base-service.service";

@Injectable({
  providedIn: "root",
})
export class PaymentService {
  actionUrl = "api/payment/";

  constructor(public service: BaseServiceService) {}

  /**
   * Create Payment
   *
   * @param payload
   * @returns any
   * @memberof PaymentService
   */
  public create(payload: PaymentModel) {
    this.service.setActionUrl(this.actionUrl);
    return this.service.post<any>(payload);
  }

  /**
   * Get Payment History
   *
   * @param pageNumber
   * @returns ResultModel
   * @memberof PaymentService
   */
  public getHistory(pageNumber = 1) {
    this.service.setActionUrl(this.actionUrl);
    return this.service.getAllPaginate<ResultModel>(pageNumber);
  }
}
