import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighChartHorizontalBarComponent } from './high-chart-horizontal-bar.component';

describe('HighChartHorizontalBarComponent', () => {
  let component: HighChartHorizontalBarComponent;
  let fixture: ComponentFixture<HighChartHorizontalBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighChartHorizontalBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighChartHorizontalBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
