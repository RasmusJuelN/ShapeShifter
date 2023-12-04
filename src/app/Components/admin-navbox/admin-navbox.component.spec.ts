import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavboxComponent } from './admin-navbox.component';

describe('AdminNavboxComponent', () => {
  let component: AdminNavboxComponent;
  let fixture: ComponentFixture<AdminNavboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNavboxComponent]
    });
    fixture = TestBed.createComponent(AdminNavboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
