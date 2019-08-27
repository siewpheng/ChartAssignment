import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarchartNumPerTagComponent } from './barchart-num-per-tag/barchart-num-per-tag.component';
import { LineChartImageComponent } from './line-chart-image/line-chart-image.component';
import { PiechartImagePerTagComponent } from './piechart-image-per-tag/piechart-image-per-tag.component';


@NgModule({
  declarations: [
    AppComponent,
    BarchartNumPerTagComponent,
    LineChartImageComponent,
    PiechartImagePerTagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
