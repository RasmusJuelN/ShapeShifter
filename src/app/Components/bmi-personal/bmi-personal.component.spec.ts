import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiPersonalComponent } from './bmi-personal.component';

describe('BmiPersonalComponent', () => {
  let component: BmiPersonalComponent;
  let fixture: ComponentFixture<BmiPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BmiPersonalComponent]
    });
    fixture = TestBed.createComponent(BmiPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
