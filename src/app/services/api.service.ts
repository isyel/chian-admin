import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Configuration } from "../config/app.constants";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private baseUrl: string;
  public _actionUrl: string;
  headers = new HttpHeaders();

  constructor(public http: HttpClient, public _configuration: Configuration) {
    this.baseUrl = this._configuration.ApiUrl;
    this.headers.set("Content-Type", "application/json");
    // this.headers.set('Content-Type', 'multipart/form-data;boundary=' + Math.random());
    this.headers.set("Accept", "application/json");
  }

  async ngInit() {
    let token = JSON.parse(localStorage.getItem("token"));
    this.headers.set("Authorization", token);
  }

  public getAll<T>(pageNumber = 0): Observable<T> {
    return this.http.get<T>(
      `${this.baseUrl}${this._actionUrl}?PageNumber=${pageNumber}`
    );
  }

  public getOne<T>(): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${this._actionUrl}`);
  }

  public getAllPaginate<T>(
    pageNumber = 0,
    SearchKeyword = null
  ): Observable<T> {
    return this.http.get<T>(
      `${this.baseUrl}${this._actionUrl}?PageNumber=${pageNumber}&SearchKeyword=${SearchKeyword}`
    );
  }

  public getByIdPaginate<T>(id?: number, pageNumber = 0): Observable<T> {
    console.log("Url: ", this.baseUrl + this._actionUrl + id);
    return this.http.get<T>(
      `${this.baseUrl}${this._actionUrl}${id}?PageNumber=${pageNumber}`
    );
  }

  public getById<T>(id?: number): Observable<T> {
    console.log("Url: ", this.baseUrl + this._actionUrl + id);
    return this.http.get<T>(`${this.baseUrl}${this._actionUrl}${id}`);
  }

  public getByUser<T>(id: number, pageNumber = 0): Observable<T> {
    return this.http.get<T>(
      `${this.baseUrl}${this._actionUrl}${id}?PageNumber=${pageNumber}`
    );
  }

  public post<T>(input: any): Observable<T> {
    const data = JSON.stringify(input);

    return this.http.post<T>(this.baseUrl + this._actionUrl, data, {
      headers: this.headers.set("Content-Type", "application/json"),
    });
    // .pipe(
    //   timeout(60000),
    //   retryWhen((errors) =>
    //     errors.pipe(delayWhen((val) => timer(val * 1000)))
    //   ),
    //   take(2),
    //   concat(
    //     throwError({
    //       error: { message: "Request Timeout. Please check your connection" },
    //     })
    //   ),
    //   share()
    // );
  }

  public postWithHeaders<T>(input: any): Observable<T> {
    console.log("base input", input);
    console.log("URL: ", `${this.baseUrl}${this.actionUrl}`);
    return this.http.post<T>(`${this.baseUrl}${this.actionUrl}`, input);
  }

  public update<T>(id: number, itemToUpdate: any): Observable<T> {
    // const data = JSON.stringify(itemToUpdate);
    console.log("URL: ", `${this.baseUrl}${this.actionUrl}${id}`);

    return this.http.put<T>(
      `${this.baseUrl}${this.actionUrl}${id}`,
      itemToUpdate,
      {
        headers: this.headers.set("Content-Type", "application/json"),
      }
    );
  }

  public delete<T>(id: number): Observable<T> {
    return this.http.delete<T>(this.baseUrl + this._actionUrl + id);
  }

  public setActionUrl(actionUrl: string, path = "") {
    this._actionUrl = `${actionUrl}${path}`;
  }

  public get actionUrl(): string {
    return this._actionUrl;
  }

  public set actionUrl(value: string) {
    this._actionUrl = value;
  }

  public handleError(message): Observable<any> {
    let error: any = {
      error: `{ "status": false, "message": "${message}" }`,
    };
    throw new Error(error);
  }
}

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.headers.has("Content-Type")) {
      req = req.clone({
        headers: req.headers.set("Content-Type", "application/json"),
      });
    }

    req = req.clone({ headers: req.headers.set("Accept", "application/json") });
    return next.handle(req);
  }
}
