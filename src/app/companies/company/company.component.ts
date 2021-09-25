import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { CompaniesService } from "src/app/services/companies/companies.service";

@Component({
  selector: "app-company",
  templateUrl: "./company.component.html",
  styleUrls: ["./company.component.scss"],
})
export class CompanyComponent implements OnInit {
  companyDetails: any;
  loading: boolean;
  private subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _companiesService: CompaniesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let companyId = +params["id"]; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.getCompanyDetails(companyId);
    });
  }

  getCompanyDetails(companyId) {
    this.loading = true;
    this.subscription = this._companiesService.getById(companyId).subscribe(
      (result) => {
        this.companyDetails = result;
        this.loading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getCountry(countryId) {
    return "N/A";
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
