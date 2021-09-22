import { Injectable } from "@angular/core";
import { ApiService } from "../api.service";

@Injectable({
  providedIn: "root",
})
export class SettingsService {
  _actionUrl: string = "Settings/";

  constructor(public _service: ApiService) {
    console.log("Hello SettingsProvider Provider");
    _service.actionUrl = this._actionUrl;
  }

  public getSettingsByKey(key: string) {
    this._service.setActionUrl(this._actionUrl, "GetByKey/?key=" + key);
    return this._service.getOne<any>();
  }
}
