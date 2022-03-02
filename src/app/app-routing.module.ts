import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighChartComponent } from './components/high-chart/high-chart.component';
import { NgxChartComponent } from './components/ngx-chart/ngx-chart.component';


const routes: Routes = [
  {
    path: 'highChart', component: HighChartComponent,
  },
  {
    path: 'ngxchart', component: NgxChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
