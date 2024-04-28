import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavitemsComponent } from './navitems.component';

describe('NavitemsComponent', () => {
  let component: NavitemsComponent;
  let fixture: ComponentFixture<NavitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavitemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
