import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CommonMethods } from "src/app/app.common";
import { OrderStatusEnum } from "src/app/models/enums/OrderStatusEnum";
import { ResultModel } from "src/app/models/ResultModel";
import { TransactionModel } from "src/app/models/TransactionModel";
import { TransactionsService } from "src/app/services/transactions/transactions.service";
import { UserData } from "src/app/user-data";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
})
export class OrdersComponent implements OnInit {
  loading: boolean;
  noOfPages: any;
  fullResult: ResultModel;
  searchTerm: string;
  deliveredOrders: TransactionModel[];
  pendingOrders: TransactionModel[];
  cancelledOrders: TransactionModel[];
  private subscription: Subscription;

  constructor(
    private _transactionsService: TransactionsService,
    public _common: CommonMethods,
    private _userData: UserData
  ) {}

  ngOnInit(): void {
    this.fetchAllAdverts();
  }

  fetchAllAdverts(pageNumber: number = 0, searchTerm = "") {
    const userData = this._userData.getAuthorizationData();
    this.loading = true;
    this.subscription = this._transactionsService
      .getAll(pageNumber, userData.userDetails.userId)
      .subscribe(
        (result) => {
          this.loading = false;
          this.fullResult = result;
          console.log("this.fullResult: ", this.fullResult);

          this.processOrderData(result.data.data);
        },
        (error) => {
          console.log(error);
        },
        () => {}
      );
  }

  processOrderData(orders: TransactionModel[]) {
    let currentDate = new Date();
    this.cancelledOrders = orders.filter(
      (order) => order.orderDetails.orderStatus === "cancelled"
    );
    this.deliveredOrders = orders.filter(
      (order) => order.orderDetails.orderStatus === "delivered"
    );
    this.pendingOrders = orders.filter(
      (order) => OrderStatusEnum[order.orderDetails.orderStatus] < 4
    );
  }

  goToSpecificPage(event) {
    console.log("goToSpecificPage, event is: ", event);
    this.fetchAllAdverts(+event - 1);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
