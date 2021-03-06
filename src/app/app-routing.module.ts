import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Error404Component } from "./error-pages/error404/error404.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  {
    path: "orders",
    loadChildren: () =>
      import("./orders/orders.module").then((m) => m.OrdersModule),
  },
  {
    path: "users",
    loadChildren: () =>
      import("./users/users.module").then((m) => m.UsersModule),
  },
  {
    path: "cylinders",
    loadChildren: () =>
      import("./cylinders/cylinders.module").then((m) => m.CylindersModule),
  },
  {
    path: "pending-orders",
    loadChildren: () =>
      import("./pending-orders/pending-orders.module").then(
        (m) => m.PendingOrdersModule
      ),
  },
  {
    path: "payments",
    loadChildren: () =>
      import("./payments/payments.module").then((m) => m.PaymentsModule),
  },
  {
    path: "basic-ui",
    loadChildren: () =>
      import("./basic-ui/basic-ui.module").then((m) => m.BasicUiModule),
  },
  {
    path: "charts",
    loadChildren: () =>
      import("./charts/charts.module").then((m) => m.ChartsDemoModule),
  },
  {
    path: "forms",
    loadChildren: () => import("./forms/form.module").then((m) => m.FormModule),
  },
  {
    path: "tables",
    loadChildren: () =>
      import("./tables/tables.module").then((m) => m.TablesModule),
  },
  {
    path: "icons",
    loadChildren: () =>
      import("./icons/icons.module").then((m) => m.IconsModule),
  },
  {
    path: "general-pages",
    loadChildren: () =>
      import("./general-pages/general-pages.module").then(
        (m) => m.GeneralPagesModule
      ),
  },
  {
    path: "apps",
    loadChildren: () => import("./apps/apps.module").then((m) => m.AppsModule),
  },
  {
    path: "user-pages",
    loadChildren: () =>
      import("./user-pages/user-pages.module").then((m) => m.UserPagesModule),
  },
  {
    path: "error-pages",
    loadChildren: () =>
      import("./error-pages/error-pages.module").then(
        (m) => m.ErrorPagesModule
      ),
  },
  { path: "**", component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
