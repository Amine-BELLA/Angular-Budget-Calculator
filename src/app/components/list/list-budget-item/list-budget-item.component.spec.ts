import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBudgetItemComponent } from './list-budget-item.component';

describe('ListBudgetItemComponent', () => {
  let component: ListBudgetItemComponent;
  let fixture: ComponentFixture<ListBudgetItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBudgetItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBudgetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
