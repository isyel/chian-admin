import { Injectable } from "@angular/core";
import { ResultModel } from "src/app/models/ResultModel";
import { BaseServiceService } from "../base-service.service";

@Injectable({
  providedIn: "root",
})
export class TransactionsService {
  actionUrl = "api/transaction/";

  constructor(public service: BaseServiceService) {}

  /**
   * Get Transactions
   *
   * @param pageNumber
   * @returns ResultModel
   * @memberof TransactionsService
   */
  public getAll(pageNumber = 1) {
    this.service.setActionUrl(this.actionUrl);
    return this.service.getAllPaginate<ResultModel>(pageNumber);
  }
}
