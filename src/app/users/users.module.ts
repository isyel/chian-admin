import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { UsersListComponent } from "./users-list/users-list.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "../shared/shared.module";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  { path: "users-list", component: UsersListComponent },
  { path: "user/:id", component: UserComponent },
];

@NgModule({
  declarations: [UsersListComponent, UserComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class UsersModule {}
