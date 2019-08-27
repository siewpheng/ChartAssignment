import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiechartImagePerTagComponent } from './piechart-image-per-tag.component';

describe('PiechartImagePerTagComponent', () => {
  let component: PiechartImagePerTagComponent;
  let fixture: ComponentFixture<PiechartImagePerTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiechartImagePerTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiechartImagePerTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
