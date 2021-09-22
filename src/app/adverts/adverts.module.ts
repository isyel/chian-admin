import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { OffersComponent } from "./offers/offers.component";
import { BlacklistsComponent } from "./blacklists/blacklists.component";
import { SharedModule } from "../shared/shared.module";
import { AdvertComponent } from "./advert/advert.component";

const routes: Routes = [
  { path: "offers", component: OffersComponent },
  { path: "blacklists", component: BlacklistsComponent },
  { path: "advert/:id", component: AdvertComponent },
];

@NgModule({
  declarations: [OffersComponent, BlacklistsComponent, AdvertComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class AdvertsModule {}
