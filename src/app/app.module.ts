import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChartsModule, ThemeService } from "ng2-charts";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TodoComponent } from "./apps/todo-list/todo/todo.component";
import { SpinnerComponent } from "./shared/spinner/spinner.component";
import { ContentAnimateDirective } from "./shared/directives/content-animate.directive";
import { TodoListComponent } from "./apps/todo-list/todo-list.component";
import { HttpClientModule } from "@angular/common/http";
import { CommonMethods } from "./app.common";
import { SettingsService } from "./services/settings/settings.service";
import { SharedModule } from "./shared/shared.module";
import { Error404Component } from "./error-pages/error404/error404.component";
import { AppConfig } from "./services/app-config";
import { AuthenticationService } from "./services/authentication/authentication.service";
import { NotificationsService } from "./services/notifications/notifications.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    Error404Component,
    TodoListComponent,
    TodoComponent,
    SpinnerComponent,
    ContentAnimateDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    ThemeService,
    AppConfig,
    AuthenticationService,
    NotificationsService,
    SettingsService,
    CommonMethods,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
