import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CommonMethods } from "src/app/app.common";
import { OrderModel } from "src/app/models/OrderModel";
import { ResultModel } from "src/app/models/ResultModel";
import { OrdersService } from "src/app/services/orders/orders.service";

@Component({
  selector: "app-blacklists",
  templateUrl: "./blacklists.component.html",
  styleUrls: ["./blacklists.component.scss"],
})
export class BlacklistsComponent implements OnInit {
  loading: boolean;
  blacklistedAdverts: OrderModel[];
  private subscription: Subscription;
  fullResult: ResultModel;

  constructor(
    private orderService: OrdersService,
    public _common: CommonMethods
  ) {}

  ngOnInit(): void {
    this.fetchAllAdverts();
  }

  getOfferStatus(advert: OrderModel) {
    //
  }

  fetchAllAdverts(pageNumber: number = 0, searchTerm = "") {
    this.loading = true;
    this.subscription = this.orderService.getAll().subscribe(
      (result) => {
        this.loading = false;
        this.fullResult = result;
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }

  goToSpecificPage(event) {
    console.log("goToSpecificPage, event is: ", event);
    this.fetchAllAdverts(+event - 1);
    //this.fetchNewPage(page);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
