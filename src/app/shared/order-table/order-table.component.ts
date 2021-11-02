import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OrderModel } from "src/app/models/OrderModel";

@Component({
  selector: "app-order-table",
  templateUrl: "./order-table.component.html",
  styleUrls: ["./order-table.component.scss"],
})
export class OrderTableComponent implements OnInit {
  @Input() orders: OrderModel[];
  @Input() orderType: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  editOrder(orderId: string) {
    this.router.navigate(["/edit-order/" + orderId]);
  }

  goToOrder(orderId: string) {
    this.router.navigate(["/orders/order/" + orderId]);
  }
}
