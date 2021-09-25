import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResultModel } from "src/app/models/ResultModel";
import { BaseServiceService } from "../base-service.service";

@Injectable({
  providedIn: "root",
})
export class CompaniesService {
  _actionUrl = "Companies/";
  data: any[];

  constructor(public _service: BaseServiceService) {}

  public getAll(pageNumber = 0) {
    this._service.setActionUrl(this._actionUrl);
    return this._service.getAllPaginate<ResultModel>(pageNumber);
  }

  public getById(id: string) {
    this._service.setActionUrl(this._actionUrl);
    return this._service.getById<any>(`${id}`);
  }

  public addCompany(companyCredentials: any) {
    if (!companyCredentials) {
      return Observable.throw({
        message: "Please enter complete company Data",
      });
    } else {
      this._service.setActionUrl(this._actionUrl);
      return this._service.post<any>(companyCredentials);
    }
  }

  public getCompanyList() {
    this._service.setActionUrl(this._actionUrl, "List/");
    return this._service.getAll<any[]>();
  }

  public getOwnedByUser(userId: string) {
    this._service.setActionUrl(this._actionUrl, "GetOwnedByUser/");
    return this._service.getById<any[]>(userId);
  }

  public getCompaniesByUser(userId: string) {
    this._service.setActionUrl(this._actionUrl, "GetUserCompanies/");
    return this._service.getById<any[]>(userId);
  }

  public getCompaniesByIndustry(industryId: string) {
    this._service.setActionUrl(this._actionUrl, "GetByIndustry/");
    return this._service.getById<any[]>(industryId);
  }

  public addUserToCompany(formData: any) {
    if (!formData) {
      return Observable.throw({
        message: "Please enter complete company Data",
      });
    } else {
      this._service.setActionUrl(this._actionUrl, "AddUserToCompany");
      return this._service.post<any>(formData);
    }
  }

  public removeUserFromCompany(formData: any) {
    if (!formData) {
      return Observable.throw({
        message: "Please enter complete company Data",
      });
    } else {
      this._service.setActionUrl(this._actionUrl, "RemoveUserFromCompany");
      return this._service.post<any>(formData);
    }
  }

  /**
   * Edit a Company
   *
   * @param {number} companyId
   * @param {any} postData
   * @returns any
   * @memberof CompaniesService
   */
  public editCompany(companyId: string, postData: any) {
    if (!postData || !companyId) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(this._actionUrl);
      return this._service.update<any>(companyId, postData);
    }
  }

  /**
   * Delete a Company
   *
   * @param {number} companyId
   * @returns any
   * @memberof CompaniesService
   */
  public deleteCompany(companyId: string) {
    if (!companyId) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      return this._service.delete<any>(companyId);
    }
  }
}
