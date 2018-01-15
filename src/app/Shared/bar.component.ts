import { Component, OnChanges, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { concat } from 'rxjs/observable/concat';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
 
@Component({
    selector: 'app-bar',
    template: `

    <div>
  <canvas
      baseChart
      [chartType]="'bar'"
      [datasets]="data"
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
      @Input() data: ChartData [];
      @Input() topText: string ;
      dataLabel: string ;

      ngOnChanges(changes) {
        console.log(changes);
        if (changes.currentValue != undefined) {
          let data = changes.currentValue as ChartData [];
          console.log(data);
          for (let index = 0; index < data.length; index++) {
            this.label.push(data[index].label); 
          }
          this.data = data;
          this.data.forEach(element => {
            console.log("Data " + element.label + " " + element.data);
          });
          console.log("Label " + this.label);
        }
      }
    

        chartOptions = {
          responsive: true
        };
        


        chartData = [
          { data: [330], label: 'Account A' },
          { data: [120], label: 'Account B' },
          { data: [45], label: 'Account C' }
        ];
      
        chartLabels = ['January', 'February', 'Mars', 'April'];
      
        onChartClick(event) {
          console.log(event);
        }

        barChartSerData(data : ChartData []){
          for (let index = 0; index < data.length; index++) {
            this.label.push(data[index].label); 
          }
          this.data = data;
          this.data.forEach(element => {
            console.log("Data " + element.label + " " + element.data);
          });
          console.log("Label " + this.label);
        }
        
    }
    
    class ChartData 
    {
      data: number [];
      label: string;
    }
  
  