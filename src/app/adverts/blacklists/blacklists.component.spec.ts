import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ListPaginationComponent } from "src/app/shared/list-pagination/list-pagination.component";

import { BlacklistsComponent } from "./blacklists.component";

describe("BlacklistsComponent", () => {
  let component: BlacklistsComponent;
  let fixture: ComponentFixture<BlacklistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlacklistsComponent, ListPaginationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlacklistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
