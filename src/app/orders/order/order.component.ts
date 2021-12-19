import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { TransactionModel } from "src/app/models/TransactionModel";
import { TransactionsService } from "src/app/services/transactions/transactions.service";
import { UserData } from "src/app/user-data";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"],
})
export class OrderComponent implements OnInit {
  order: TransactionModel;
  loading: boolean;
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private _transactionsService: TransactionsService,
    private _userData: UserData
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let orderId = params["id"]; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.getOrder(orderId);
    });
  }

  getOrder(orderId: string) {
    this.loading = true;
    this.subscription = this._transactionsService.getOne(orderId).subscribe(
      (result) => {
        this.order = result.data;
        this.loading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
