import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartType, ChartDataSets } from 'chart.js';
import data from '../../data'


@Component({
  selector: 'app-barchart-num-per-tag',
  templateUrl: './barchart-num-per-tag.component.html',
  styleUrls: ['./barchart-num-per-tag.component.css']
})
export class BarchartNumPerTagComponent implements OnInit {

  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [];
  
  constructor() { }

  ngOnInit() {

    let Numbertag = data

    let tempDataStore = {}
   
    for ( let CountData of Numbertag){
 
      const month = CountData.dateAdded
      // month.getMonth()           
      const tags = CountData.tags

      if (tempDataStore[month]){
        if (tempDataStore[month][tags]){
          tempDataStore[month][tags] += 1
        } else{
          tempDataStore[month][tags] = 1
        }

        } else{
          tempDataStore[month] = {}
          tempDataStore[month][tags] = 1

        }
      }

      let MonthlyCount = {}

      for(const month in tempDataStore){
        this.barChartData.push(tempDataStore[month])
        for (let tags in tempDataStore[month]){
          if(MonthlyCount[month]){
            MonthlyCount[month].push(tempDataStore[month][tags])
          }else {
            MonthlyCount[month]=[tempDataStore[month][tags]]
          }
          }


        }

        for (let month in MonthlyCount ){
    this.barChartData.push (
      {data: MonthlyCount[month], label: month}
    )

        }

      }


    }

  

