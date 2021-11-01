import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ResultModel } from "src/app/models/ResultModel";
import { TransactionsService } from "src/app/services/transactions/transactions.service";

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

  constructor(private _transactionService: TransactionsService) {}

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(pageNumber: number = 0) {
    this.loading = true;
    this.subscription = this._transactionService.getAll(pageNumber).subscribe(
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
