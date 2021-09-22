import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertTableComponent } from './advert-table.component';

describe('AdvertTableComponent', () => {
  let component: AdvertTableComponent;
  let fixture: ComponentFixture<AdvertTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
