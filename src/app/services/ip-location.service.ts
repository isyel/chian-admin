import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class IpLocationService {
  constructor(private http: HttpClient) {}
  getIpAddress() {
    try {
      return this.http.get(
        "http://api.ipstack.com/check?access_key=fbc2c70ea38d72667becf761f39ab3f0"
      );
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error("observable error: ", error);
    return Observable.throw(error);
  }
}
