import { Component, OnChanges, Input } from '@angular/core';
import { chart, Color } from 'chart.js';
import { concat } from 'rxjs/observable/concat';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
import { DataManagerService } from './dataManager.service';

@Component({
    selector: 'app-pie',
    template: `
    <div style="display: block">
    <canvas baseChart
      [labels]="labels"
      [datasets]="datasets"
      [colors]="colorsOverride"
      [chartType]="type"
      ></canvas>
  </div>
    `
  })

  export class PieComponent implements OnChanges{
    @Input() data: any [];
    @Input() topText: string ;

    name:string;
    labels:string[] = ['Ja', 'Nej', 'Avstår', 'Frånvarande'];
    dataOld:number[] = [350, 450, 100,100];
    type:string = 'doughnut';
    datasets: any[] = [];
    colorsUndefined: Array<Color>;
    colorsOverride: Array<Color> = [{
      backgroundColor: [
        "#00A300",
        "#FF0000",
        "#CCCCCC",
        "#351C75"
      ],
      hoverBackgroundColor: [
        "#7DFF7D",
        "#FF3333",
        "#D6D6D6",
        "#5D4991"
      ]
    }];
    constructor(private dataManager : DataManagerService) {}
      
    ngOnChanges(changes) {
      console.log(changes.data.currentValue);
      if (changes.data.currentValue != undefined) {
        let partyByYear : any [] = [];
        changes.data.currentValue.forEach(p => {
          partyByYear.push([p.ja, p.nej, p.avstår, p.frånvarande ])
        });
        console.log(partyByYear);
        this.datasets = [
          {
            data: this.dataManager.percentage(partyByYear)
        }];
        console.log(this.datasets);        
      }
    }
      

}


