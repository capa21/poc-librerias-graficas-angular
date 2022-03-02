import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxChartHorizontalBarComponent } from './ngx-chart-horizontal-bar.component';

describe('NgxChartHorizontalBarComponent', () => {
  let component: NgxChartHorizontalBarComponent;
  let fixture: ComponentFixture<NgxChartHorizontalBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxChartHorizontalBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxChartHorizontalBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
