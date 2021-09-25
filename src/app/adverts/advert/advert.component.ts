import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { OrderModel } from "src/app/models/OrderModel";
import { OrdersService } from "src/app/services/orders/orders.service";

@Component({
  selector: "app-advert",
  templateUrl: "./advert.component.html",
  styleUrls: ["./advert.component.scss"],
})
export class AdvertComponent implements OnInit {
  orderDetails: OrderModel;
  loading: boolean;
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private ordersService: OrdersService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let orderId = +params["id"]; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.getOrderDetails(orderId);
    });
  }

  getOrderDetails(orderId) {
    this.loading = true;
    this.subscription = this.ordersService.getOne(orderId).subscribe(
      (result) => {
        this.orderDetails = result;
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
