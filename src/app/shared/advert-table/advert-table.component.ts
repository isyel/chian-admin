import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AdvertModel } from "src/app/models/AdvertModel";

@Component({
  selector: "app-advert-table",
  templateUrl: "./advert-table.component.html",
  styleUrls: ["./advert-table.component.scss"],
})
export class AdvertTableComponent implements OnInit {
  @Input() adverts: AdvertModel[];
  @Input() advertType: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  editAdvert(advertId) {
    this.router.navigate(["/edit-advert/" + advertId]);
  }

  goToAdvert(advertId) {
    this.router.navigate(["/adverts/advert/" + advertId]);
  }
}
