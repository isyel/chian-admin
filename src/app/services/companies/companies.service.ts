import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  CompanyModel,
  CompanyFormModel,
  UserCompanyFormModel,
} from "src/app/models/CompanyModel";
import { ResultModel } from "src/app/models/ResultModel";
import { ApiService } from "../api.service";

@Injectable({
  providedIn: "root",
})
export class CompaniesService {
  _actionUrl = "Companies/";
  data: CompanyModel[];

  constructor(public _service: ApiService) {
    _service.actionUrl = this._actionUrl;
  }

  public getAll(pageNumber = 0) {
    this._service.setActionUrl(this._actionUrl);
    return this._service.getAllPaginate<ResultModel>(pageNumber);
  }

  public getById(id: number) {
    this._service.setActionUrl(this._actionUrl);
    return this._service.getById<any>(id);
  }

  public addCompany(companyCredentials: CompanyFormModel) {
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
    return this._service.getAll<CompanyModel[]>();
  }

  public getOwnedByUser(userId: number) {
    this._service.setActionUrl(this._actionUrl, "GetOwnedByUser/");
    return this._service.getById<CompanyModel[]>(userId);
  }

  public getCompaniesByUser(userId: number) {
    this._service.setActionUrl(this._actionUrl, "GetUserCompanies/");
    return this._service.getById<CompanyModel[]>(userId);
  }

  public getCompaniesByIndustry(industryId: number) {
    this._service.setActionUrl(this._actionUrl, "GetByIndustry/");
    return this._service.getById<CompanyModel[]>(industryId);
  }

  public addUserToCompany(formData: UserCompanyFormModel) {
    if (!formData) {
      return Observable.throw({
        message: "Please enter complete company Data",
      });
    } else {
      this._service.setActionUrl(this._actionUrl, "AddUserToCompany");
      return this._service.post<any>(formData);
    }
  }

  public removeUserFromCompany(formData: UserCompanyFormModel) {
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
   * @param {CompanyFormModel} postData
   * @returns any
   * @memberof CompaniesService
   */
  public editCompany(companyId: number, postData: CompanyFormModel) {
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
  public deleteCompany(companyId: number) {
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
