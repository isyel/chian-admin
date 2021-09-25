import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CommonMethods } from "src/app/app.common";
import { ResultModel } from "src/app/models/ResultModel";
import { OrdersService } from "src/app/services/orders/orders.service";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.component.html",
  styleUrls: ["./offers.component.scss"],
})
export class OffersComponent implements OnInit {
  loading: boolean;
  noOfPages: any;
  fullResult: ResultModel;
  searchTerm: string;
  activeAdverts: any[];
  scheduledAdverts: any[];
  endedAdverts: any[];
  private subscription: Subscription;

  constructor(
    private _advertService: OrdersService,
    public _common: CommonMethods
  ) {}

  ngOnInit(): void {
    this.fetchAllAdverts();
  }

  fetchAllAdverts(pageNumber: number = 0, searchTerm = "") {
    this.loading = true;
    this.subscription = this._advertService.getAll().subscribe(
      (result) => {
        this.loading = false;
        this.fullResult = result;
        console.log("this.fullResult: ", this.fullResult);

        this.processOfferType(result.items);
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }

  processOfferType(adverts: any[]) {
    let currentDate = new Date();
    this.endedAdverts = adverts.filter(
      (advert) => new Date(advert.proposedEndDate) <= currentDate
    );
    this.activeAdverts = adverts.filter(
      (advert) => new Date(advert.offerStartDate) <= currentDate
    );
    this.scheduledAdverts = adverts.filter(
      (advert) => new Date(advert.offerStartDate) >= currentDate
    );
  }

  goToSpecificPage(event) {
    console.log("goToSpecificPage, event is: ", event);
    this.fetchAllAdverts(+event - 1);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
