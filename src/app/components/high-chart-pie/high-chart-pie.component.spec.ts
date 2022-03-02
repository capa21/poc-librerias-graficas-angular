import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighChartPieComponent } from './high-chart-pie.component';

describe('HighChartPieComponent', () => {
  let component: HighChartPieComponent;
  let fixture: ComponentFixture<HighChartPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighChartPieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighChartPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
