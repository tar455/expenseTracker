import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensestatComponent } from './expensestat.component';

describe('ExpensestatComponent', () => {
  let component: ExpensestatComponent;
  let fixture: ComponentFixture<ExpensestatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensestatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpensestatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
