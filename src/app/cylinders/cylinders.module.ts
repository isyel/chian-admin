import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CylinderComponent } from "./cylinder/cylinder.component";
import { CylindersComponent } from "./cylinders/cylinders.component";

const routes: Routes = [
  { path: "cylinders-list", component: CylindersComponent },
  { path: "cylinder/:id", component: CylinderComponent },
];

@NgModule({
  declarations: [CylindersComponent, CylinderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class CylindersModule {}
