import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PendingOrdersListComponent } from "./pending-orders-list/pending-orders-list.component";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { PendingOrderComponent } from "./pending-order/pending-order.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
  { path: "pending-orders-list", component: PendingOrdersListComponent },
  { path: "pending-order/:id", component: PendingOrderComponent },
];

@NgModule({
  declarations: [PendingOrdersListComponent, PendingOrderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgbModule,
  ],
})
export class PendingOrdersModule {}
