import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CountryModel } from "src/app/models/CountryModel";
import { LocalGovernmentModel } from "src/app/models/LocalGovernmentModel";
import { StateModel } from "src/app/models/StateModel";
import { ApiService } from "../api.service";

const GEOLOCATION_ERRORS = {
  "errors.location.unsupportedBrowser":
    "Browser does not support location services",
  "errors.location.permissionDenied":
    "You have rejected access to your location",
  "errors.location.positionUnavailable": "Unable to determine your location",
  "errors.location.timeout": "Service timeout has been reached",
};

@Injectable({
  providedIn: "root",
})
export class LocationService {
  _actionUrl = "Location/";
  data: CountryModel[];

  constructor(public _service: ApiService) {
    _service.actionUrl = this._actionUrl;
  }

  public getCountryById(id: number) {
    this._service.setActionUrl(this._actionUrl, "GetCountry/");
    return this._service.getById<any>(id);
  }

  public createCountry(formData: CountryModel) {
    if (!formData) {
      return Observable.throw({
        message: "Please enter complete country Data",
      });
    } else {
      this._service.setActionUrl(this._actionUrl, "CreateCountry");
      return this._service.post<string>(formData);
    }
  }

  public getAllCountries() {
    this._service.setActionUrl(this._actionUrl, "GetAllCountries/");
    return this._service.getAll<CountryModel[]>();
  }

  /**
   * Edit a Country
   *
   * @param {number} locationId
   * @param {CompanyFormModel} postData
   * @returns any
   * @memberof LocationService
   */
  public editCountry(locationId: number, postData: CountryModel) {
    if (!postData || !locationId) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(this._actionUrl + "EditCountry");
      return this._service.update<any>(locationId, postData);
    }
  }

  /**
   * Delete a Country
   *
   * @param {number} locationId
   * @returns any
   * @memberof LocationService
   */
  public deleteCountry(locationId: number) {
    if (!locationId) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(this._actionUrl + "DeleteContury");
      return this._service.delete<any>(locationId);
    }
  }

  public getStates() {
    this._service.setActionUrl(this._actionUrl, "GetStates/");
    return this._service.getAll<StateModel[]>();
  }

  public getStateById(id: number) {
    this._service.setActionUrl(this._actionUrl, "GetStates/");
    return this._service.getById<any>(id);
  }

  /**
   * Edit a State
   *
   * @param {number} stateId
   * @param {StateModel} postData
   * @returns any
   * @memberof LocationService
   */
  public editState(stateId: number, postData: StateModel) {
    if (!postData || !stateId) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(this._actionUrl + "EditState");
      return this._service.update<any>(stateId, postData);
    }
  }

  public createState(formData: StateModel) {
    if (!formData) {
      return Observable.throw({
        message: "Please enter complete country Data",
      });
    } else {
      this._service.setActionUrl(this._actionUrl, "CreateState");
      return this._service.post<string>(formData);
    }
  }

  /**
   * Delete a State
   *
   * @param {number} stateId
   * @returns any
   * @memberof LocationService
   */
  public deleteState(stateId: number) {
    if (!stateId) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      return this._service.delete<any>(stateId);
    }
  }

  public getAllLocalGovernment() {
    this._service.setActionUrl(this._actionUrl, "GetLocalGovernment/");
    return this._service.getAll<LocalGovernmentModel[]>();
  }

  public getLocalGovernmentByState(stateId: number) {
    this._service.setActionUrl(this._actionUrl, "GetLocalGovernmentByState/");
    return this._service.getById<LocalGovernmentModel[]>(stateId);
  }

  public getLocalGovernmentById(id: number) {
    this._service.setActionUrl(this._actionUrl, "GetLocalGovernment/");
    return this._service.getById<LocalGovernmentModel[]>(id);
  }

  /**
   * Edit a LocalGovernment
   *
   * @param {number} localGovernmentId
   * @param {StateModel} postData
   * @returns any
   * @memberof LocationService
   */
  public editLocalGovernment(localGovernmentId: number, postData: StateModel) {
    if (!postData || !localGovernmentId) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(this._actionUrl + "EditLocalGovernment");
      return this._service.update<any>(localGovernmentId, postData);
    }
  }

  public createLocalGovernment(formData: StateModel) {
    if (!formData) {
      return Observable.throw({
        message: "Please enter complete LocalGovernment Data",
      });
    } else {
      this._service.setActionUrl(this._actionUrl, "CreateLocalGovernment");
      return this._service.post<string>(formData);
    }
  }

  /**
   * Delete a LocalGovernment
   *
   * @param {number} localGovernmentId
   * @returns any
   * @memberof LocationService
   */
  public deleteLocalGovernment(localGovernmentId: number) {
    if (!localGovernmentId) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(this._actionUrl, "DeleteLocalGovernment");
      return this._service.delete<any>(localGovernmentId);
    }
  }

  /**
   * Get GeoLocation
   *
   * @param {any} geoLocationOptions
   * @returns any
   * @memberof LocationService
   */
  public getLocation(geoLocationOptions?: any): Observable<any> {
    geoLocationOptions = geoLocationOptions || { timeout: 5000 };

    return Observable.create((observer) => {
      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
          (position) => {
            observer.next(position);
            observer.complete();
          },
          (error) => {
            switch (error.code) {
              case 1:
                observer.error(
                  GEOLOCATION_ERRORS["errors.location.permissionDenied"]
                );
                break;
              case 2:
                observer.error(
                  GEOLOCATION_ERRORS["errors.location.positionUnavailable"]
                );
                break;
              case 3:
                observer.error(GEOLOCATION_ERRORS["errors.location.timeout"]);
                break;
            }
          },
          geoLocationOptions
        );
      } else {
        observer.error(
          GEOLOCATION_ERRORS["errors.location.unsupportedBrowser"]
        );
      }
    });
  }
}

export let geolocationServiceInjectables: Array<any> = [
  { provide: LocationService, useClass: LocationService },
];
