import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import data from '../../data'

@Component({
selector: 'app-line-chart-image',
  templateUrl: './line-chart-image.component.html',
  styleUrls: ['./line-chart-image.component.css']
})

export class LineChartImageComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Series 1' },]
  public lineChartLabels: Label[] = [];
  public lineChartColors: Color[] = [ ];
    // { // grey
    //   backgroundColor: 'rgba(148,159,177,0.2)',
    //   borderColor: 'rgba(148,159,177,1)',
    //   pointBackgroundColor: 'rgba(148,159,177,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    // },
    // { // dark grey
    //   backgroundColor: 'rgba(77,83,96,0.2)',
    //   borderColor: 'rgba(77,83,96,1)',
    //   pointBackgroundColor: 'rgba(77,83,96,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(77,83,96,1)'
    // },
    // { // red
    //   backgroundColor: 'rgba(255,0,0,0.3)',
    //   borderColor: 'red',
    //   pointBackgroundColor: 'rgba(148,159,177,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    // }
 
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',       
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };

  constructor() { }

  ngOnInit() {

    const imagedatedata = data

    let datecount= { }
    
    for (const x of imagedatedata){
      let AddDate = new Date (x.dateAdded)
      const monthadd = AddDate.getMonth()
      {
 
        if (datecount[monthadd]){
    // if movie already checked, increment by 1
          datecount [monthadd] +=1
                }        
          else {
           // if movie not yet checked, set to 1
          datecount [monthadd] = 1
        }

        }
    
        console.log(datecount)
        
        for (const key in datecount) {
          this.lineChartLabels.push(key)
          const numTags = datecount[key]
          this.lineChartData[0].data.push(numTags)
      }

  }

}
}