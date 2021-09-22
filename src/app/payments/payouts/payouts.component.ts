import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ResultModel } from "src/app/models/ResultModel";
import { WalletWithdrawalModel } from "src/app/models/WalletWithdrawalModel";
import { WalletService } from "src/app/services/wallet/wallet.service";

@Component({
  selector: "app-payouts",
  templateUrl: "./payouts.component.html",
  styleUrls: ["./payouts.component.scss"],
})
export class PayoutsComponent implements OnInit {
  walletWithdrawals: WalletWithdrawalModel[];
  fullResult: ResultModel;
  loading: boolean;
  private subscription: Subscription;

  constructor(private _walletService: WalletService) {}

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(pageNumber: number = 0) {
    this.loading = true;
    this.subscription = this._walletService
      .getAllWithdrawals(pageNumber)
      .subscribe(
        (result) => {
          this.walletWithdrawals = result.items;
          this.fullResult = result;
          this.loading = false;
        },
        (error) => {
          console.log(error);
          this.loading = false;
        }
      );
  }

  isNumber(number) {
    return typeof number === "number";
  }

  goToSpecificPage(event) {
    this.getTransactions(+event - 1);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
