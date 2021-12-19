import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { TransactionModel } from "src/app/models/TransactionModel";
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
  vendorsList: VendorModel[];
  deliveryAgentsList: UserModel[];
  loading: boolean;
  private subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _transactionsService: TransactionsService,
    private _usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let transactionId = params["id"]; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.gerOrderDetails(transactionId);
    });
  }

  gerOrderDetails(transactionId: string) {
    this.loading = true;
    this.subscription = this._transactionsService
      .getOne(transactionId)
      .subscribe(
        (result) => {
          this.order = result.data;
          this.loading = false;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getAvailableAgents() {
    this.subscription = this._usersService.getDeliveryAgentsList().subscribe(
      (result) => {
        this.deliveryAgentsList = result.data.data.filter(
          (agent: UserModel) => agent.status === "available"
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getVendors() {
    this.subscription = this._usersService.getVendorsList().subscribe(
      (result) => {
        this.vendorsList = result.data.data;
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
