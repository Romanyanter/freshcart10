import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailscategoriesComponent } from './datailscategories.component';

describe('DatailscategoriesComponent', () => {
  let component: DatailscategoriesComponent;
  let fixture: ComponentFixture<DatailscategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatailscategoriesComponent]
    });
    fixture = TestBed.createComponent(DatailscategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
