import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBorrowerComponent } from './update-borrower.component';

describe('UpdateBorrowerComponent', () => {
  let component: UpdateBorrowerComponent;
  let fixture: ComponentFixture<UpdateBorrowerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateBorrowerComponent]
    });
    fixture = TestBed.createComponent(UpdateBorrowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
