import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckpriceComponent } from './checkprice.component';

describe('CheckpriceComponent', () => {
  let component: CheckpriceComponent;
  let fixture: ComponentFixture<CheckpriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckpriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
