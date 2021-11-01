import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingOrdersTemplateComponent } from './pending-orders-template.component';

describe('PendingOrdersTemplateComponent', () => {
  let component: PendingOrdersTemplateComponent;
  let fixture: ComponentFixture<PendingOrdersTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingOrdersTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingOrdersTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
