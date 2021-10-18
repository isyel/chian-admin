import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { OptionsModel } from "../models/OptionsModel";
import { ResultModel } from "../models/ResultModel";
import { OptionsService } from "../services/options/options.service";

@Component({
  selector: "app-cylinders",
  templateUrl: "./cylinders.component.html",
  styleUrls: ["./cylinders.component.scss"],
})
export class CylindersComponent implements OnInit {
  itemToEdit: OptionsModel;
  items: OptionsModel[];
  private subscription: Subscription;
  noOfPages: any;
  fullResult: ResultModel;

  constructor(private optionsService: OptionsService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(pageNumber = 0) {
    this.subscription = this.optionsService.getAll().subscribe(
      (result) => {
        this.fullResult = result;
        this.items = result.data;
      },
      (error) => {
        console.log("Error: ", error);
      }
    );
  }

  editItem(item) {
    console.log("Item to edit: ", item);
  }

  goToSpecificPage(event) {
    console.log("goToSpecificPage, event is: ", event);
    this.getItems(+event - 1);
    //this.fetchNewPage(page);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
