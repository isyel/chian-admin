import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CompaniesListComponent } from "./companies-list/companies-list.component";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { CompanyComponent } from "./company/company.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
  { path: "companies-list", component: CompaniesListComponent },
  { path: "company/:id", component: CompanyComponent },
];

@NgModule({
  declarations: [CompaniesListComponent, CompanyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgbModule,
  ],
})
export class CompaniesModule {}
