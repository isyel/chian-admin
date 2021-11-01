import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { OrderModel } from "src/app/models/OrderModel";

@Component({
  selector: "app-pending-orders-template",
  templateUrl: "./pending-orders-template.component.html",
  styleUrls: ["./pending-orders-template.component.scss"],
})
export class PendingOrdersTemplateComponent implements OnInit {
  @Input() orders: OrderModel[];
  @Input() orderType: string;
  @Input() fullResult: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToOrder(orderId) {
    this.router.navigate(["pending-orders/pending-order/" + orderId]);
  }
}
