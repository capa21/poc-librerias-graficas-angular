import { Component } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { single } from './data';

@Component({
  selector: 'app-ngx-chart-horizontal-bar',
  templateUrl: './ngx-chart-horizontal-bar.component.html',
  styleUrls: ['./ngx-chart-horizontal-bar.component.css']
})
export class NgxChartHorizontalBarComponent {

  view: [number, number] = [0, 0];
  single: [] = [];
  // options
  showXAxis: boolean = false;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Country';
  showYAxisLabel: boolean = false;
  xAxisLabel: string = 'Population';

  colorScheme: Color = {
    name: 'Jesús',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single });
  }
}
