import { Component, OnChanges, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { concat } from 'rxjs/observable/concat';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
 
@Component({
    selector: 'app-bar',
    template: `

    <div style="width: 40%;">
  <canvas
      baseChart
      [chartType]="'bar'"
      [datasets]="chartData"
      [labels]="chartLabels"
      [options]="chartOptions"
      [legend]="true"
      (chartClick)="onChartClick($event)">
  </canvas>
</div>
    `
  })

  export class BarComponent implements OnChanges{

      label: string [] =  [];
      @Input() data: object [];
      @Input() topText: string ;
      dataLabel: string ;

      ngOnChanges(changes) {
        console.log(changes);
        this.barChartSerData(changes.data.currentValue);
      }
    

        chartOptions = {
          responsive: true
        };
        


        chartData = [
          { data: [330, 600, 260, 700], label: 'Account A' },
          { data: [120, 455, 100, 340], label: 'Account B' },
          { data: [45, 67, 800, 500], label: 'Account C' }
        ];
      
        chartLabels = ['January', 'February', 'Mars', 'April'];
      
        onChartClick(event) {
          console.log(event);
        }

        barChartSerData(data){
          console.log(data);
          for (let index = 0; index < data.length; index++) {
            this.label.push(data[index].label); 
            console.log(data[index].label); 
          }
          this.data = data;
          console.log("Data " + this.data);
          console.log("Label " + this.label);
        }
        
    }
    
    class ChartData 
    {
      data: number;
      label: string;
    }
  
  