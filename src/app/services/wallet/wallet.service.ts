import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WalletModel } from "src/app/models/WalletModel";
import { BaseServiceService } from "../base-service.service";

@Injectable({
  providedIn: "root",
})
export class WalletService {
  _actionUrl: string = "Wallets/";
  _walletWithdrawalsActionUrl: string = "WalletWithdrawals/";
  _walletTransferActionUrl: string = "WalletTransfers/";
  data: WalletModel[];

  constructor(public _service: BaseServiceService) {
    console.log("Hello WalletServiceProvider Provider");
  }

  public getById(wallet_id: string) {
    if (!wallet_id) {
      console.error("Invalid Request");
    } else {
      return this._service.getById<any>(wallet_id);
    }
  }

  public getByUser(userId: string) {
    this._service.setActionUrl(this._actionUrl, "GetByUser/");
    return this._service.getById<any>(userId);
  }

  public getByCompany(companyId: string) {
    this._service.setActionUrl(this._actionUrl + "GetByCompany/" + companyId);
    return this._service.getAll<any>();
  }

  public getByWalletId(walletId: string) {
    this._service.setActionUrl(this._actionUrl, "GetByUser/");
    return this._service.getById<any>(walletId);
  }

  public getWalletHistory(walletId: string, pageNumber: number = 0) {
    this._service.setActionUrl(this._actionUrl + "GetHistory/");
    return this._service.getByIdPaginate<any>(walletId, pageNumber);
  }

  //WalletTransfers
  public getAllTransfers(pageNumber: number) {
    this._service.setActionUrl(this._walletTransferActionUrl);
    return this._service.getAllPaginate<any>(pageNumber);
  }

  public transferFund(formData: any) {
    if (!formData) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(
        this._walletTransferActionUrl + "InitiateTransfer"
      );
      return this._service.post<any>(formData);
    }
  }

  public verifyTransferOTP(formData: any) {
    if (!formData) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(this._walletTransferActionUrl + "VerifyOTP");
      return this._service.post<any>(formData);
    }
  }

  public getTransferById(id: string) {
    if (!id) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(this._walletTransferActionUrl);
      return this._service.getById<any>(id);
    }
  }

  public getTransferHistory(walletId: string) {
    if (!walletId) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(
        this._walletTransferActionUrl + "GetByWallet/"
      );
      return this._service.getById<any>(walletId);
    }
  }

  //WalletWithdrawals
  public getAllWithdrawals(pageNumber: number) {
    this._service.setActionUrl(this._walletWithdrawalsActionUrl);
    return this._service.getAllPaginate<any>(pageNumber);
  }

  public getWithdrawalsByUser(userId) {
    if (!userId) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(
        this._walletWithdrawalsActionUrl + "GetByUser/"
      );
      return this._service.getById<any>(userId);
    }
  }

  public getWithdrawalsByWalletId(wallet_id: string) {
    this._service.setActionUrl(
      this._walletWithdrawalsActionUrl,
      "GetByWallet/"
    );
    return this._service.getById<any>(wallet_id);
  }

  public withdrawFunds(formData: any) {
    if (!formData) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(
        this._walletWithdrawalsActionUrl + "InitiateWithdrawal"
      );
      return this._service.post<any>(formData);
    }
  }

  public verifyWithdrawalOTP(formData: any) {
    if (!formData) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(
        this._walletWithdrawalsActionUrl + "VerifyOTP"
      );
      return this._service.post<any>(formData);
    }
  }
}
