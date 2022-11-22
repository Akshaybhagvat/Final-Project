import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkprice1Component } from './checkprice1.component';

describe('Checkprice1Component', () => {
  let component: Checkprice1Component;
  let fixture: ComponentFixture<Checkprice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Checkprice1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Checkprice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
