import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ResultModel } from "src/app/models/ResultModel";
import { TransactionsService } from "src/app/services/transactions/transactions.service";
import { UserData } from "src/app/user-data";

@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.scss"],
})
export class TransactionsComponent implements OnInit {
  transactions: any[];
  fullResult: ResultModel;
  loading: boolean;
  private subscription: Subscription;

  constructor(
    private _transactionService: TransactionsService,
    private _userData: UserData
  ) {}

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(pageNumber: number = 0) {
    const userData = this._userData.getAuthorizationData();
    this.loading = true;
    this.subscription = this._transactionService
      .getHistory(userData.userId)
      .subscribe(
        (result) => {
          this.transactions = result.data.data;
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
