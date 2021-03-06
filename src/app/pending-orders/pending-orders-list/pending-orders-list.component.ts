import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { OrderModel } from "src/app/models/OrderModel";
import { ResultModel } from "src/app/models/ResultModel";
import { TransactionsService } from "src/app/services/transactions/transactions.service";

@Component({
  selector: "app-pending-orders-list",
  templateUrl: "./pending-orders-list.component.html",
  styleUrls: ["./pending-orders-list.component.scss"],
})
export class PendingOrdersListComponent implements OnInit {
  unassignedAgents: OrderModel[];
  unassignedVendors: OrderModel[];
  fullResultAgents: ResultModel;
  fullResultVendors: ResultModel;
  loading: boolean;
  private subscription: Subscription;

  constructor(
    private _transactionsService: TransactionsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPendingAgentOrders();
    this.getPendingVendorOrders();
  }

  getPendingAgentOrders(pageNumber: number = 0) {
    this.subscription = this._transactionsService
      .getUnassignedAgentOrder()
      .subscribe(
        (result) => {
          this.unassignedAgents = result.data.data;
          this.fullResultAgents = result.data;
          this.loading = false;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getPendingVendorOrders(pageNumber: number = 0) {
    this.subscription = this._transactionsService
      .getUnassignedVendorOrder()
      .subscribe(
        (result) => {
          this.unassignedVendors = result.data.data;
          this.fullResultVendors = result.data;
          this.loading = false;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  goToSpecificPage(event) {
    this.getPendingAgentOrders(+event - 1);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
