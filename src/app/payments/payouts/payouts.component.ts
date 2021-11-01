import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ResultModel } from "src/app/models/ResultModel";
import { TransactionsService } from "src/app/services/transactions/transactions.service";

@Component({
  selector: "app-payouts",
  templateUrl: "./payouts.component.html",
  styleUrls: ["./payouts.component.scss"],
})
export class PayoutsComponent implements OnInit {
  payouts: any[];
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
        this.payouts = result.data.data;
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
