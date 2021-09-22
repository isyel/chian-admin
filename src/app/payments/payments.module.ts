import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TransactionsComponent } from "./transactions/transactions.component";
import { RouterModule, Routes } from "@angular/router";
import { PayoutsComponent } from "./payouts/payouts.component";
import { DisputesComponent } from "./disputes/disputes.component";
import { HistoryComponent } from "./history/history.component";
import { SharedModule } from "../shared/shared.module";

const routes: Routes = [
  { path: "transactions", component: TransactionsComponent },
  { path: "payouts", component: PayoutsComponent },
  { path: "disputes", component: DisputesComponent },
  { path: "history", component: HistoryComponent },
];

@NgModule({
  declarations: [
    TransactionsComponent,
    PayoutsComponent,
    DisputesComponent,
    HistoryComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class PaymentsModule {}
