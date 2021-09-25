import { Injectable } from "@angular/core";
import { BaseServiceService } from "../base-service.service";

@Injectable({
  providedIn: "root",
})
export class SettingsService {
  _actionUrl: string = "Settings/";

  constructor(public service: BaseServiceService) {}

  public getSettingsByKey(key: string) {
    this.service.setActionUrl(this._actionUrl, "GetByKey/?key=" + key);
    return this.service.getAll<any>();
  }
}
