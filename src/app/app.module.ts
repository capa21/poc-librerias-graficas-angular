import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HighchartsChartModule } from 'highcharts-angular';


import { AppComponent } from './app.component';
import { NgxChartComponent } from './components/ngx-chart/ngx-chart.component';
import { NgxChartHorizontalBarComponent } from './components/ngx-chart-horizontal-bar/ngx-chart-horizontal-bar.component';
import { NgxChartPieComponent } from './components/ngx-chart-pie/ngx-chart-pie.component';
import { HighChartComponent } from './components/high-chart/high-chart.component';
import { HighChartHorizontalBarComponent } from './components/high-chart-horizontal-bar/high-chart-horizontal-bar.component';
import { HighChartPieComponent } from './components/high-chart-pie/high-chart-pie.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NgxChartComponent,
    NgxChartHorizontalBarComponent,
    NgxChartPieComponent,
    HighChartComponent,
    HighChartHorizontalBarComponent,
    HighChartPieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    HighchartsChartModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
