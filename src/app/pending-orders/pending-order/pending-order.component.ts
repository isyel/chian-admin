import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { CommonMethods } from "src/app/app.common";
import { ResultModel } from "src/app/models/ResultModel";
import { TransactionModel } from "src/app/models/TransactionModel";
import { TransactionStateModel } from "src/app/models/TransactionStateModel";
import { UserModel, VendorModel } from "src/app/models/UserModel";
import { TransactionsService } from "src/app/services/transactions/transactions.service";
import { UsersService } from "src/app/services/users/users.service";

@Component({
  selector: "app-pending-order",
  templateUrl: "./pending-order.component.html",
  styleUrls: ["./pending-order.component.scss"],
})
export class PendingOrderComponent implements OnInit {
  order: TransactionModel;
  vendorFullResult: ResultModel;
  agentFullResult: ResultModel;
  vendorsList: VendorModel[];
  deliveryAgentsList: UserModel[];
  loading: boolean;
  private subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _transactionsService: TransactionsService,
    private _usersService: UsersService,
    public _common: CommonMethods
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let transationId = params["id"]; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.getOrderDetails(transationId);
    });
  }

  getOrderDetails(transationId: string) {
    this.loading = true;
    this.subscription = this._transactionsService
      .getOne(transationId)
      .subscribe(
        (result) => {
          this.order = result.data;
          console.log("order: ", this.order);

          this.loading = false;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getAvailableAgents(pageNumber?: number) {
    this.subscription = this._usersService
      .getDeliveryAgentsList(pageNumber)
      .subscribe(
        (result) => {
          this.agentFullResult = result.data;
          this.deliveryAgentsList = result.data.data.filter(
            (agent: UserModel) => agent.status === "available"
          );
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getVendors(pageNumber?: number) {
    this.subscription = this._usersService.getVendorsList(pageNumber).subscribe(
      (result) => {
        this.vendorFullResult = result.data;
        this.vendorsList = result.data.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  assignVendor(vendor: VendorModel) {
    const data: TransactionStateModel = {
      userId: vendor._id,
      transationId: this.order.transationId,
    };
    this.subscription = this._transactionsService
      .assignVendorToOrder(data)
      .subscribe(
        (result) => {
          console.log("result from assignAgent: ", result);
          console.log("order transaction id: ", this.order.transationId);
          this.getOrderDetails(this.order.transationId);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  assignAgent(agent: UserModel) {
    const data: TransactionStateModel = {
      userId: agent._id,
      transationId: this.order.transationId,
    };
    this.subscription = this._transactionsService
      .assignAgentToOrder(data)
      .subscribe(
        (result) => {
          console.log("result from assignAgent: ", result);
          console.log("order transaction id: ", this.order.transationId);

          this.getOrderDetails(this.order.transationId);
          this.getAvailableAgents();
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
