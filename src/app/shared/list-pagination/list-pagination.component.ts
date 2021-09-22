import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ResultModel } from "src/app/models/ResultModel";

@Component({
  selector: "app-list-pagination",
  templateUrl: "./list-pagination.component.html",
  styleUrls: ["./list-pagination.component.scss"],
})
export class ListPaginationComponent implements OnInit {
  @Input() fullResult: ResultModel;
  @Output() getNextPage = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  fetchNextPage(pageNumber) {
    this.getNextPage.emit(pageNumber);
  }
}
