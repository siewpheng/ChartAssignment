import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import data from '../../data.js'; 
// import { LifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';

interface UserPreferenceData {
 
}

@Component({
  selector: 'app-piechart-image-per-tag',
  templateUrl: './piechart-image-per-tag.component.html',
  styleUrls: ['./piechart-image-per-tag.component.css']
})
export class PiechartImagePerTagComponent implements OnInit {

  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
    public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)', 'rgba(255, 0, 0, 0.8)', 'rgba(0, 0, 255)', 'rgba(0, 0, 255, 0.6)', 'rgba (0,0, 255, 0.1)' ],
    },
  ];

  constructor() { }
 
  ngOnInit() {
    const tagsdata = data
    console.log(tagsdata)
 

let tagcount = {}

for (const x of tagsdata){

  for (const tagvalue of x.tags){
    if (tagcount[tagvalue]){
      tagcount[tagvalue] +=1
    }else {
      tagcount[tagvalue] = 1
    }
  }

}

for (const key in tagcount) {
  this.pieChartLabels.push(key)
  const numLikes = tagcount[key]
  this.pieChartData.push(numLikes)

//  for (const key in tags) {
//    this.pieChartLabels.push(key)
//   const numLikes = Count[key]
//   this.pieChartData.push(numLikes)  
//  }
// }
//     }
 
    
//     }


}
}
}
