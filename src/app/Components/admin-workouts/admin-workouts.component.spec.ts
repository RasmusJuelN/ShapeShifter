import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkoutsComponent } from './admin-workouts.component';

describe('AdminWorkoutsComponent', () => {
  let component: AdminWorkoutsComponent;
  let fixture: ComponentFixture<AdminWorkoutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminWorkoutsComponent]
    });
    fixture = TestBed.createComponent(AdminWorkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
