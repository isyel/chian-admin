import { Injectable } from "@angular/core";
import { ApiService } from "../api.service";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  _actionUrl: string = "Dashboard/";

  constructor(public _service: ApiService) {}

  public getDashboard() {
    this._service.setActionUrl(this._actionUrl);
    return this._service.getOne<any>();
  }
}
