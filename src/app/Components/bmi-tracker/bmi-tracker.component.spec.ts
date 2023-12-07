import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiTrackerComponent } from './bmi-tracker.component';

describe('BmiTrackerComponent', () => {
  let component: BmiTrackerComponent;
  let fixture: ComponentFixture<BmiTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BmiTrackerComponent]
    });
    fixture = TestBed.createComponent(BmiTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
