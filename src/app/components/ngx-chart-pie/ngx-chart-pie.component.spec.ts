import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxChartPieComponent } from './ngx-chart-pie.component';

describe('NgxChartPieComponent', () => {
  let component: NgxChartPieComponent;
  let fixture: ComponentFixture<NgxChartPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxChartPieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxChartPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
