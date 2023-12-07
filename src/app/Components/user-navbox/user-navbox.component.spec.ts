import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNavboxComponent } from './user-navbox.component';

describe('UserNavboxComponent', () => {
  let component: UserNavboxComponent;
  let fixture: ComponentFixture<UserNavboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserNavboxComponent]
    });
    fixture = TestBed.createComponent(UserNavboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
