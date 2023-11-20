import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UplodecarComponent } from './uplodecar.component';

describe('UplodecarComponent', () => {
  let component: UplodecarComponent;
  let fixture: ComponentFixture<UplodecarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UplodecarComponent]
    });
    fixture = TestBed.createComponent(UplodecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
