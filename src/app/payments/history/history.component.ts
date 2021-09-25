import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ResultModel } from "src/app/models/ResultModel";
import { AuthenticationService } from "src/app/services/authentication/authentication.service";
import { WalletService } from "src/app/services/wallet/wallet.service";
import { UserData } from "src/app/user-data";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.scss"],
})
export class HistoryComponent implements OnInit {
  walletHistory: any[];
  fullResult: ResultModel;
  loading: boolean;
  wallet: any;
  private subscription: Subscription;

  constructor(
    private _walletService: WalletService,
    public _authService: AuthenticationService,
    private userData: UserData
  ) {}

  ngOnInit(): void {
    const userDetails = this.userData.getUserData();
    this.getUserWallet(+userDetails._id);
  }

  getUserWallet(userId: number) {
    this.subscription = this._walletService.getByUser(userId).subscribe(
      (result) => {
        this.wallet = result;
        this.getWalletHistory();
        localStorage.setItem("walletData", JSON.stringify(result));
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getWalletHistory(pageNumber: number = 0) {
    this.loading = true;
    if (this.wallet)
      this.subscription = this._walletService
        .getWalletHistory(this.wallet.id, pageNumber)
        .subscribe(
          (result) => {
            this.walletHistory = result.items;
            this.fullResult = result;
            this.loading = false;
          },
          (error) => {
            console.log(error);
            this.loading = false;
          }
        );
    else this.loading = false;
  }

  goToSpecificPage(event) {
    this.getWalletHistory(+event - 1);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
