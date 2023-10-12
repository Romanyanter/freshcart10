import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdectdatalisComponent } from './prodectdatalis.component';

describe('ProdectdatalisComponent', () => {
  let component: ProdectdatalisComponent;
  let fixture: ComponentFixture<ProdectdatalisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdectdatalisComponent]
    });
    fixture = TestBed.createComponent(ProdectdatalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
