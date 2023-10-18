import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatapasswordComponent } from './updatapassword.component';

describe('UpdatapasswordComponent', () => {
  let component: UpdatapasswordComponent;
  let fixture: ComponentFixture<UpdatapasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatapasswordComponent]
    });
    fixture = TestBed.createComponent(UpdatapasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
