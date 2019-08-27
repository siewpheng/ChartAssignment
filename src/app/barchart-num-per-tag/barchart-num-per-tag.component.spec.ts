import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartNumPerTagComponent } from './barchart-num-per-tag.component';

describe('BarchartNumPerTagComponent', () => {
  let component: BarchartNumPerTagComponent;
  let fixture: ComponentFixture<BarchartNumPerTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarchartNumPerTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartNumPerTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
