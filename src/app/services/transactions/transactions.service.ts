import { Injectable } from "@angular/core";
import { ResultModel } from "src/app/models/ResultModel";
import { TransactionModel } from "src/app/models/TransactionModel";
import { TransactionStateModel } from "src/app/models/TransactionStateModel";
import { BaseServiceService } from "../base-service.service";

@Injectable({
  providedIn: "root",
})
export class TransactionsService {
  actionUrl = "api/transaction/";
  transactionStateUrl = "api/transactionstate/";

  constructor(public service: BaseServiceService) {}

  /**
   * Get All Transaction
   *
   * @param pageNumber
   * @returns TransactionModel
   * @memberof TransactionsService
   */
  public getAll(pageNumber: number, userId: string) {
    this.service.setActionUrl(this.actionUrl);
    return this.service.getAllPaginate<ResultModel>(pageNumber);
  }

  /**
   * Get Single Transaction
   *
   * @param transactionId
   * @returns TransactionModel
   * @memberof TransactionsService
   */
  public getOne(transactionId: string) {
    this.service.setActionUrl(this.actionUrl);
    return this.service.getById<ResultModel>(transactionId);
  }

  /**
   * Get User Transactions History
   *
   * @param userId
   * @returns ResultModel
   * @memberof TransactionsService
   */
  public getHistory(userId: string) {
    this.service.setActionUrl(this.actionUrl, "user/");
    return this.service.getById<ResultModel>(userId);
  }

  /**
   * Get Pending Order
   *
   * @param userId
   * @returns ResultModel
   * @memberof TransactionsService
   */
  public getPending(userId: string) {
    this.service.setActionUrl(this.transactionStateUrl, `${userId}/pending`);
    return this.service.getAll<ResultModel>();
  }

  /**
   * Get Pending Order
   *
   * @param userId
   * @returns ResultModel
   * @memberof TransactionsService
   */
  public getOrderBeingFulfilled(userId: string) {
    this.service.setActionUrl(this.transactionStateUrl, `${userId}/fulfilling`);
    return this.service.getAll<ResultModel>();
  }

  /**
   * Get Fulfilling Order
   *
   * @param userId
   * @returns ResultModel
   * @memberof TransactionsService
   */
  public getAcceptedOrders(userId: string) {
    this.service.setActionUrl(this.transactionStateUrl, `${userId}/accept`);
    return this.service.getAll<ResultModel>();
  }

  /**
   * Get Unasssigned to agent Order
   *
   * @param userId
   * @returns ResultModel
   * @memberof TransactionsService
   */
  public getUnassignedAgentOrder(userId?: string) {
    this.service.setActionUrl(this.actionUrl, `unassigned-agent`);
    return this.service.getAll<ResultModel>();
  }

  /**
   * Get Unasssigned to vendor Order
   *
   * @param userId
   * @returns ResultModel
   * @memberof TransactionsService
   */
  public getUnassignedVendorOrder(userId?: string) {
    this.service.setActionUrl(this.actionUrl, `unassigned-vendor`);
    return this.service.getAll<ResultModel>();
  }

  /**
   * Accept Orders
   *
   * @param data
   * @returns ResultModel
   * @memberof TransactionsService
   */
  public acceptOrderRequest(data: TransactionStateModel) {
    this.service.setActionUrl(this.transactionStateUrl, `assigned/accept`);
    return this.service.updateStatus<ResultModel>(data);
  }

  /**
   * Reject Orders
   *
   * @param data
   * @returns ResultModel
   * @memberof TransactionsService
   */
  public rejectOrderRequest(data: TransactionStateModel) {
    this.service.setActionUrl(this.transactionStateUrl, `assigned/reject`);
    return this.service.updateStatus<ResultModel>(data);
  }

  /**
   * Assign Agent
   *
   * @param data
   * @returns ResultModel
   * @memberof TransactionsService
   */
  public assignAgentToOrder(data: TransactionStateModel) {
    this.service.setActionUrl(this.transactionStateUrl, `assign-agent`);
    return this.service.updateStatus<any>(data);
  }

  /**
   * Assign Vendor
   *
   * @param data
   * @returns ResultModel
   * @memberof TransactionsService
   */
  public assignVendorToOrder(data: TransactionStateModel) {
    this.service.setActionUrl(this.transactionStateUrl, `assign-vendor`);
    return this.service.updateStatus<any>(data);
  }

  /**
   * Mark Delivered
   *
   * @param data
   * @returns ResultModel
   * @memberof TransactionsService
   */
  public markAsDelivered(transactionId: string) {
    this.service.setActionUrl(this.transactionStateUrl);
    return this.service.update<ResultModel>(transactionId, {});
  }
}
