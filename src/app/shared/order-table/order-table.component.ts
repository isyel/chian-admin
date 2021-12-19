import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TransactionModel } from "src/app/models/TransactionModel";

@Component({
  selector: "app-order-table",
  templateUrl: "./order-table.component.html",
  styleUrls: ["./order-table.component.scss"],
})
export class OrderTableComponent implements OnInit {
  @Input() orders: TransactionModel[];
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
