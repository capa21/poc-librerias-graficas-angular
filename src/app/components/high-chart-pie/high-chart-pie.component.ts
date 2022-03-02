import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-high-chart-pie',
  templateUrl: './high-chart-pie.component.html',
  styleUrls: ['./high-chart-pie.component.css']
})
export class HighChartPieComponent{

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'pie'
    }]
  };

  constructor() { }



}
