import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CommonMethods } from "src/app/app.common";
import { AdvertModel } from "src/app/models/AdvertModel";
import { ResultModel } from "src/app/models/ResultModel";
import { AdvertsService } from "src/app/services/adverts/adverts.service";

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
  activeAdverts: AdvertModel[];
  scheduledAdverts: AdvertModel[];
  endedAdverts: AdvertModel[];
  private subscription: Subscription;

  constructor(
    private _advertService: AdvertsService,
    public _common: CommonMethods
  ) {}

  ngOnInit(): void {
    this.fetchAllAdverts();
  }

  fetchAllAdverts(pageNumber: number = 0, searchTerm = "") {
    this.loading = true;
    this.subscription = this._advertService
      .getAll(pageNumber, searchTerm)
      .subscribe(
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

  processOfferType(adverts: AdvertModel[]) {
    let currentDate = new Date();
    this.endedAdverts = adverts.filter(
      (advert) => new Date(advert.proposedEndDate) <= currentDate
    );
    this.activeAdverts = adverts.filter(
      (advert) =>
        new Date(advert.offerStartDate) <= currentDate &&
        this._common.isAdvertActive(advert.status)
    );
    this.scheduledAdverts = adverts.filter(
      (advert) =>
        new Date(advert.offerStartDate) >= currentDate &&
        !this._common.isAdvertActive(advert.status)
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
