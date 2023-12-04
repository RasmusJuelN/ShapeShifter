import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExercisesComponent } from './admin-exercises.component';

describe('AdminExercisesComponent', () => {
  let component: AdminExercisesComponent;
  let fixture: ComponentFixture<AdminExercisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminExercisesComponent]
    });
    fixture = TestBed.createComponent(AdminExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
