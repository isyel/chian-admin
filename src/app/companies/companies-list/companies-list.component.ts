import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ResultModel } from "src/app/models/ResultModel";
import { OrdersService } from "src/app/services/orders/orders.service";

@Component({
  selector: "app-companies-list",
  templateUrl: "./companies-list.component.html",
  styleUrls: ["./companies-list.component.scss"],
})
export class CompaniesListComponent implements OnInit {
  companies: any[];
  fullResult: ResultModel;
  loading: boolean;
  private subscription: Subscription;

  constructor(
    private _companiesService: OrdersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(pageNumber: number = 0) {
    this.subscription = this._companiesService.getAll().subscribe(
      (result) => {
        this.companies = result.items;
        this.fullResult = result;
        this.loading = false;
        localStorage.setItem("companies", JSON.stringify(result));
      },
      (error) => {
        console.log(error);
      }
    );
  }

  goToSpecificPage(event) {
    this.getCompanies(+event - 1);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
