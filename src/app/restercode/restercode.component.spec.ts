import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestercodeComponent } from './restercode.component';

describe('RestercodeComponent', () => {
  let component: RestercodeComponent;
  let fixture: ComponentFixture<RestercodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestercodeComponent]
    });
    fixture = TestBed.createComponent(RestercodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
