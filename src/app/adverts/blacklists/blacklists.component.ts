import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CommonMethods } from "src/app/app.common";
import { AdvertModel } from "src/app/models/AdvertModel";
import { ProgressStatusEnum } from "src/app/models/Enum/ProgressStatusEnum";
import { ResultModel } from "src/app/models/ResultModel";
import { AdvertsService } from "src/app/services/adverts/adverts.service";

@Component({
  selector: "app-blacklists",
  templateUrl: "./blacklists.component.html",
  styleUrls: ["./blacklists.component.scss"],
})
export class BlacklistsComponent implements OnInit {
  loading: boolean;
  blacklistedAdverts: AdvertModel[];
  private subscription: Subscription;
  fullResult: ResultModel;

  constructor(
    private _advertService: AdvertsService,
    public _common: CommonMethods
  ) {}

  ngOnInit(): void {
    this.fetchAllAdverts();
  }

  getOfferStatus(advert: AdvertModel) {
    let currentDate = new Date();
    let advertDate = new Date(advert.proposedEndDate);
    if (advertDate <= currentDate) {
      return "Ended";
    } else if (advertDate >= currentDate && advert.published) {
      return "On Going";
    } else if (advertDate >= currentDate && !advert.published) {
      return "Scheduled";
    }
  }

  fetchAllAdverts(pageNumber: number = 0, searchTerm = "") {
    this.loading = true;
    this.subscription = this._advertService
      .getAll(pageNumber, searchTerm)
      .subscribe(
        (result) => {
          this.loading = false;
          this.fullResult = result;
          this.processOfferType(result.items);
        },
        (error) => {
          console.log(error);
        },
        () => {}
      );
  }

  processOfferType(adverts: AdvertModel[]) {
    this.blacklistedAdverts = adverts.filter(
      (advert) => ProgressStatusEnum[advert.status] === "blacklist"
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
