import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ListPaginationComponent } from "./list-pagination/list-pagination.component";
import { HeaderComponent } from "./header/header.component";
import { OrderTableComponent } from "./order-table/order-table.component";
import { PendingOrdersTemplateComponent } from "./pending-orders-template/pending-orders-template.component";

@NgModule({
  declarations: [
    ListPaginationComponent,
    HeaderComponent,
    OrderTableComponent,
    PendingOrdersTemplateComponent,
  ],
  imports: [CommonModule, NgbModule],
  exports: [
    ListPaginationComponent,
    HeaderComponent,
    OrderTableComponent,
    PendingOrdersTemplateComponent,
  ],
})
export class SharedModule {}
