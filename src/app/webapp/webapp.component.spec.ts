import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebappComponent } from './webapp.component';

describe('WebappComponent', () => {
  let component: WebappComponent;
  let fixture: ComponentFixture<WebappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebappComponent]
    });
    fixture = TestBed.createComponent(WebappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
