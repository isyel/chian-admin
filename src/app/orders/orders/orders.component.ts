import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CommonMethods } from "src/app/app.common";
import { OrderStatusEnum } from "src/app/models/enums/OrderStatusEnum";
import { OrderModel } from "src/app/models/OrderModel";
import { ResultModel } from "src/app/models/ResultModel";
import { OrdersService } from "src/app/services/orders/orders.service";

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
  deliveredOrders: OrderModel[];
  pendingOrders: OrderModel[];
  cancelledOrders: OrderModel[];
  private subscription: Subscription;

  constructor(
    private _ordersService: OrdersService,
    public _common: CommonMethods
  ) {}

  ngOnInit(): void {
    this.fetchAllAdverts();
  }

  fetchAllAdverts(pageNumber: number = 0, searchTerm = "") {
    this.loading = true;
    this.subscription = this._ordersService.getAll().subscribe(
      (result) => {
        this.loading = false;
        this.fullResult = result.data;
        console.log("this.fullResult: ", this.fullResult);

        this.processOrderData(result.data.data);
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }

  processOrderData(orders: OrderModel[]) {
    let currentDate = new Date();
    this.cancelledOrders = orders.filter(
      (order) => order.orderStatus === "cancelled"
    );
    this.deliveredOrders = orders.filter(
      (order) => order.orderStatus === "delivered"
    );
    this.pendingOrders = orders.filter(
      (order) => OrderStatusEnum[order.orderStatus] < 2
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
