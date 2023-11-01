import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatauplodeComponent } from './datauplode.component';

describe('DatauplodeComponent', () => {
  let component: DatauplodeComponent;
  let fixture: ComponentFixture<DatauplodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatauplodeComponent]
    });
    fixture = TestBed.createComponent(DatauplodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
