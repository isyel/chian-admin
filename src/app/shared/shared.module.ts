import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ListPaginationComponent } from "./list-pagination/list-pagination.component";
import { HeaderComponent } from "./header/header.component";
import { AdvertTableComponent } from "./advert-table/advert-table.component";
import { PendingOrdersTemplateComponent } from "./pending-orders-template/pending-orders-template.component";

@NgModule({
  declarations: [
    ListPaginationComponent,
    HeaderComponent,
    AdvertTableComponent,
    PendingOrdersTemplateComponent,
  ],
  imports: [CommonModule, NgbModule],
  exports: [
    ListPaginationComponent,
    HeaderComponent,
    AdvertTableComponent,
    PendingOrdersTemplateComponent,
  ],
})
export class SharedModule {}
