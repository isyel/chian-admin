import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IndustryModel, IndustryFormModel } from "src/app/models/IndustryModel";
import { ApiService } from "../api.service";

@Injectable({
  providedIn: "root",
})
export class IndustriesService {
  _actionUrl = "Industries/";
  data: IndustryModel[];

  constructor(public _service: ApiService) {
    _service.actionUrl = this._actionUrl;
  }

  public getById(id: number) {
    this._service.setActionUrl(this._actionUrl);
    return this._service.getById<IndustryModel[]>(id);
  }

  public addIndustry(formData: IndustryFormModel) {
    if (!formData) {
      return Observable.throw({
        message: "Please enter complete industry Data",
      });
    } else {
      this._service.setActionUrl(this._actionUrl);
      return this._service.post<string>(formData);
    }
  }

  public getIndustriesList() {
    this._service.setActionUrl(this._actionUrl, "List/");
    return this._service.getAll<any>().toPromise();
  }

  public getActiveIndustries() {
    this._service.setActionUrl(this._actionUrl, "GetActive/");
    return this._service.getById<IndustryModel[]>();
  }

  public getFeaturedIndustries() {
    this._service.setActionUrl(this._actionUrl, "GetFeatured/");
    return this._service.getById<IndustryModel[]>();
  }

  /**
   * Edit a Company
   *
   * @param {number} industryId
   * @param {IndustryFormModel} postData
   * @returns any
   * @memberof IndustriesService
   */
  public editIndustry(industryId: number, postData: IndustryFormModel) {
    if (!postData || !industryId) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(this._actionUrl);
      return this._service.update<any>(industryId, postData);
    }
  }

  /**
   * Delete a Company
   *
   * @param {number} industryId
   * @returns any
   * @memberof IndustriesService
   */
  public deleteIndustry(industryId: number) {
    if (!industryId) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      return this._service.delete<any>(industryId);
    }
  }
}
