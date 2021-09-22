import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { AdvertModel } from "src/app/models/AdvertModel";
import { AdvertsService } from "src/app/services/adverts/adverts.service";

@Component({
  selector: "app-advert",
  templateUrl: "./advert.component.html",
  styleUrls: ["./advert.component.scss"],
})
export class AdvertComponent implements OnInit {
  advertDetails: AdvertModel;
  loading: boolean;
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private _advertService: AdvertsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let advertId = +params["id"]; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.getUserDetails(advertId);
    });
  }

  getUserDetails(userId) {
    this.loading = true;
    this.subscription = this._advertService.getById(userId).subscribe(
      (result) => {
        this.advertDetails = result;
        this.loading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
