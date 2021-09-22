import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FundTransferApprovalModel } from "src/app/models/FundTransferApprovalModel";
import { WalletModel } from "src/app/models/WalletModel";
import { FundTransferModel } from "src/app/models/WalletTransferModel";
import { FundWithdrawalModel } from "src/app/models/WalletWithdrawalModel";
import { WithdrawOTPModel } from "src/app/models/WithdrawOTPModel";
import { ApiService } from "../api.service";

@Injectable({
  providedIn: "root",
})
export class WalletService {
  _actionUrl: string = "Wallets/";
  _walletWithdrawalsActionUrl: string = "WalletWithdrawals/";
  _walletTransferActionUrl: string = "WalletTransfers/";
  data: WalletModel[];

  constructor(public _service: ApiService) {
    console.log("Hello WalletServiceProvider Provider");
    _service.actionUrl = this._actionUrl;
  }

  public getById(wallet_id: number) {
    if (!wallet_id) {
      return this._service.handleError("Invalid Request");
    } else {
      return this._service.getById<any>(wallet_id);
    }
  }

  public getByUser(userId: number) {
    this._service.setActionUrl(this._actionUrl, "GetByUser/");
    return this._service.getById<any>(userId);
  }

  public getByCompany(companyId: number) {
    this._service.actionUrl = this._actionUrl + "GetByCompany/" + companyId;
    return this._service.getAll<any>();
  }

  public getByWalletId(walletId: number) {
    this._service.setActionUrl(this._actionUrl, "GetByUser/");
    return this._service.getByUser<any>(walletId);
  }

  public getWalletHistory(walletId: number, pageNumber: number = 0) {
    this._service.setActionUrl(this._actionUrl + "GetHistory/");
    return this._service.getByIdPaginate<any>(walletId, pageNumber);
  }

  //WalletTransfers
  public getAllTransfers(pageNumber: number) {
    this._service.setActionUrl(this._walletTransferActionUrl);
    return this._service.getAllPaginate<any>(pageNumber);
  }

  public transferFund(formData: FundTransferModel) {
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

  public verifyTransferOTP(formData: FundTransferApprovalModel) {
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

  public getTransferById(id: number) {
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

  public getTransferHistory(walletId: number) {
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

  public getWithdrawalsByWalletId(wallet_id: number) {
    this._service.setActionUrl(
      this._walletWithdrawalsActionUrl,
      "GetByWallet/"
    );
    return this._service.getByUser<any>(wallet_id);
  }

  public withdrawFunds(formData: FundWithdrawalModel) {
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

  public verifyWithdrawalOTP(formData: WithdrawOTPModel) {
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
