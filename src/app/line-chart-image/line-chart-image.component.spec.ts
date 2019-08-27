import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartImageComponent } from './line-chart-image.component';

describe('LineChartImageComponent', () => {
  let component: LineChartImageComponent;
  let fixture: ComponentFixture<LineChartImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
