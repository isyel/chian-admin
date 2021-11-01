import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ResultModel } from "src/app/models/ResultModel";
import { PaymentService } from "src/app/services/payment/payment.service";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.scss"],
})
export class HistoryComponent implements OnInit {
  walletHistory: any[];
  fullResult: ResultModel;
  loading: boolean;
  private subscription: Subscription;

  constructor(private _paymentsService: PaymentService) {}

  ngOnInit(): void {
    this.getWalletHistory();
  }

  getWalletHistory(pageNumber: number = 0) {
    this.loading = true;
    this.subscription = this._paymentsService.getHistory(pageNumber).subscribe(
      (result) => {
        this.walletHistory = result.data?.data;
        this.fullResult = result.data;
        this.loading = false;
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  goToSpecificPage(event) {
    this.getWalletHistory(+event - 1);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
