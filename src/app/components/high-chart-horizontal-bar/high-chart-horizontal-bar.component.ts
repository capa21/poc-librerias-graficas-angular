import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-high-chart-horizontal-bar',
  templateUrl: './high-chart-horizontal-bar.component.html',
  styleUrls: ['./high-chart-horizontal-bar.component.css']
})
export class HighChartHorizontalBarComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'bar'
    }]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
