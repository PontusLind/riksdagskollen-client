import { Component, OnChanges, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { concat } from 'rxjs/observable/concat';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
import { DataManagerService } from './dataManager.service';

@Component({
    selector: 'app-bar',
    template: `
    <div>
  <canvas
      baseChart
      [chartType]="'bar'"
      [datasets]="datasets"
      [labels]="label"
      [options]="chartOptions"
      [legend]="true"
      (chartClick)="onChartClick($event)">
  </canvas>
</div>
    `
  })

  export class BarComponent implements OnChanges{
    
      label: string [] =  [];
      @Input() data: any [];
      @Input() topText: string ;
      dataLabel: string ;
      chartData: ChartData = new ChartData;
      datasets: any [] = [];

      constructor(private dataManager : DataManagerService) {}

      ngOnChanges(changes) {
        console.log(changes.data.currentValue);
        if (changes.data.currentValue != undefined) {        
          changes.data.currentValue.forEach(l => {
            this.label.push(l.label);
            console.log(this.dataManager.setColorsAccordingToParty(l))
            this.datasets.push(this.dataManager.setColorsAccordingToParty(l));

            // if (this.datasets == undefined) {
            //   console.log(this.dataManager.setColorsAccordingToParty(l))
            //   this.datasets  = [this.dataManager.setColorsAccordingToParty(l)]
            // }
            // else {
            //   console.log(this.dataManager.setColorsAccordingToParty(l))
            //   this.datasets.push(this.dataManager.setColorsAccordingToParty(l));
            // }
          });
          console.log(this.datasets);
          // console.log("Label " + this.label);
          // this.chartData.label = this.label;
          // this.chartData.data = [];
          // changes.data.currentValue.forEach(d => {
          //   this.chartData.data = changes.data.currentValue
          // });
          // console.log(this.chartData);

        //   this.datasets = [
        //     {
        //         label: "My First dataset",
        //         backgroundColor: "rgba(255,99,132,0.2)",
        //         borderColor: "rgba(0,99,132,1)",
        //         borderWidth: 1,
        //         hoverBackgroundColor: "rgba(0,99,132,1)",
        //         hoverBorderColor: "rgba(0,99,132,1)",
        //         data: [59],
        //     },
        //     {
        //       label: "My First dataset",
        //         backgroundColor: ["rgba(0,99,132,1)"],
        //         borderColor: ["rgba(0,99,132,1)"],
        //         borderWidth: 1,
        //         hoverBackgroundColor: ["rgba(0,99,132,1)"],
        //         hoverBorderColor: ["rgba(0,99,132,1)"],
        //         data: [59],
        //     }
        // ];
        }
      }

        chartOptions = {
          responsive: true
        };

        onChartClick(event) {
          console.log(event);
        }
    }

    class ChartData
    {
      data: any [];
      label: string [];
      backgroundColor : string [];
      borderColor: string [];
      borderWidth: number;
    }

