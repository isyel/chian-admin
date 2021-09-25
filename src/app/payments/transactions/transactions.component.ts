import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ResultModel } from "src/app/models/ResultModel";
import { WalletService } from "src/app/services/wallet/wallet.service";

@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.scss"],
})
export class TransactionsComponent implements OnInit {
  walletTransfers: any[];
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
      .getAllTransfers(pageNumber)
      .subscribe(
        (result) => {
          this.walletTransfers = result.items;
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
