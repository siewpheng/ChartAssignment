import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarchartNumPerTagComponent } from './barchart-num-per-tag/barchart-num-per-tag.component';
import { LineChartImageComponent } from './line-chart-image/line-chart-image.component';
import { PiechartImagePerTagComponent } from './piechart-image-per-tag/piechart-image-per-tag.component';

const routes: Routes = [
  {path: "barchart-num-per-tag", component: BarchartNumPerTagComponent},
  {path: "line-chart-image", component: LineChartImageComponent}, 
  {path: "piechart-image-per-tag", component: PiechartImagePerTagComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  

 }
