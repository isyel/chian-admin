import { Injectable } from "@angular/core";
import { OrderModel, OrderModelPayload } from "src/app/models/OrderModel";
import { ResultModel } from "src/app/models/ResultModel";
import { BaseServiceService } from "../base-service.service";

@Injectable({
  providedIn: "root",
})
export class OrdersService {
  actionUrl = "api/orders/";
  transactionStatePath = "api/transactionstate/";

  constructor(public service: BaseServiceService) {}

  /**
   * Create Order
   *
   * @param payload
   * @returns OrderModel
   * @memberof OrdersService
   */
  public create(payload: OrderModelPayload) {
    this.service.setActionUrl(this.actionUrl);
    return this.service.post<any>(payload);
  }

  /**
   * Update Order
   *
   * @param orderId
   * @param payload
   * @returns OrderModel
   * @memberof OrdersService
   */
  public update(orderId: string, payload: OrderModelPayload) {
    this.service.setActionUrl(this.actionUrl);
    return this.service.update<any>(orderId, payload);
  }

  /**
   * Get All Orders
   *
   * @returns ResultModel
   * @memberof OrdersService
   */
  public getAll() {
    this.service.setActionUrl(this.actionUrl);
    return this.service.getAllPaginate<ResultModel>();
  }

  /**
   * Get Single Order
   *
   * @param orderId
   * @returns OrderModel
   * @memberof OrdersService
   */
  public getOne(orderId: string) {
    this.service.setActionUrl(this.actionUrl);
    return this.service.getById<OrderModel>(orderId);
  }

  /**
   * Get User Order History
   *
   * @param userId
   * @returns ResultModel
   * @memberof OrdersService
   */
  public getHistory(userId: string) {
    this.service.setActionUrl(this.actionUrl, "user/");
    return this.service.getById<ResultModel>(userId);
  }

  /**
   * Get Unassigned Order
   *
   * @returns ResultModel
   * @memberof OrdersService
   */
  public getUnassigned() {
    this.service.setActionUrl(this.actionUrl, "unassigned-agent/");
    return this.service.getAll<ResultModel>();
  }

  /**
   * Get Unassigned To Vendor
   *
   * @returns ResultModel
   * @memberof OrdersService
   */
  public getUnassignedVendor() {
    this.service.setActionUrl(this.actionUrl, "unassigned-vendor/");
    return this.service.getAll<ResultModel>();
  }

  /**
   * Assign Order Agent
   *
   * @param orderId
   * @param payload
   * @returns OrderModel
   * @memberof OrdersService
   */
  public assignToAgent(orderId: string, payload: OrderModelPayload) {
    this.service.setActionUrl(this.actionUrl, "assign-agent");
    return this.service.update<any>(orderId, payload);
  }

  /**
   * Assign Order Vendor
   *
   * @param orderId
   * @param payload
   * @returns OrderModel
   * @memberof OrdersService
   */
  public assignToVendor(orderId: string, payload: OrderModelPayload) {
    this.service.setActionUrl(this.actionUrl, "assign-vendor");
    return this.service.update<any>(orderId, payload);
  }

  /**
   * Cancel Order
   *
   * @param orderId
   * @returns any
   * @memberof OrdersService
   */
  public cancel(orderId: string) {
    this.service.setActionUrl(this.actionUrl, "cancel");
    return this.service.getById<any>(orderId);
  }

  /**
   * Delete Order
   *
   * @param orderId
   * @returns any
   * @memberof OrdersService
   */
  public delete(orderId: string) {
    this.service.setActionUrl(this.actionUrl);
    return this.service.delete<any>(orderId);
  }
}
