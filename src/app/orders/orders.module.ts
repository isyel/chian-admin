import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { OrdersComponent } from "./orders/orders.component";
import { SharedModule } from "../shared/shared.module";
import { OrderComponent } from "./order/order.component";

const routes: Routes = [
  { path: "orders-list", component: OrdersComponent },
  { path: "order/:id", component: OrderComponent },
];

@NgModule({
  declarations: [OrdersComponent, OrderComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class OrdersModule {}
