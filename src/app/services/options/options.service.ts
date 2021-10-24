import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { OptionsModel } from "src/app/models/OptionsModel";
import { OrderModel } from "src/app/models/OrderModel";
import { BaseServiceService } from "../base-service.service";

@Injectable({
  providedIn: "root",
})
export class OptionsService {
  actionUrl = "api/orders/options/";

  constructor(
    public service: BaseServiceService,
    private httpClient: HttpClient
  ) {}

  /**
   * Get Options
   *
   * @returns OptionsModel[]
   * @memberof OptionsService
   */
  public getAll() {
    this.service.setActionUrl(this.actionUrl);
    return this.service.getAll<any>();
  }

  /**
   * Create Cylinder Options
   *
   * @param payload
   * @returns any
   * @memberof OptionsService
   */
  public create(payload: OptionsModel) {
    this.service.setActionUrl(this.actionUrl);
    return this.service.post<any>(payload);
  }

  /**
   * Edit Cylinder Options
   *
   * @param payload
   * @param optionId
   * @returns any
   * @memberof OptionsService
   */
  public edit(optionId: string, payload: OptionsModel) {
    this.service.setActionUrl(this.actionUrl);
    return this.service.update<any>(optionId, payload);
  }

  /**
   * Create Cylinder Options
   *
   * @param optionId
   * @returns any
   * @memberof OptionsService
   */
  public delete(optionId: string) {
    this.service.setActionUrl(this.actionUrl);
    return this.service.delete<any>(optionId);
  }

  /**
   * Create States
   *
   * @returns OptionsModel[]
   * @memberof OptionsService
   */
  public getStates() {
    return this.httpClient.get<any>("assets/data/states.json");
  }
}
