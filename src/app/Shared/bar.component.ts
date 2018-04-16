import { Component, OnChanges, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { concat } from 'rxjs/observable/concat';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
import { DataManagerService } from './dataManager.service';
import { Router } from '@angular/router';


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
      [colors]="color"
      [legend]="true"
      (chartClick)="onChartClick($event)">
  </canvas>
</div>
    `
  })

  export class BarComponent implements OnChanges{
    
      label: any [] =  [];
      @Input() data: any [];
      @Input() topText: string ;
      dataLabel: string ;
      chartData: ChartData = new ChartData;
      datasets: any [] = [];
      color : any [] = [];
      temp : any [] = [];

      constructor(private dataManager : DataManagerService, private router: Router) {}

      ngOnChanges(changes) {
        if (changes.data.currentValue != undefined) {        
          this.color[0] = {backgroundColor : [], borderColor : [], borderWidth : 1}
          this.datasets.push({label: "Procent", data : [] = []});
          changes.data.currentValue.forEach(l => {
            
            this.label.push(this.dataManager.getPartyFullName(l.label));
            this.datasets[0].data.push(l.data.toFixed(1));
            this.color[0].backgroundColor.push(this.dataManager.setColorsAccordingToParty(l.label) +"0.8)");
            this.color[0].borderColor.push(this.dataManager.setColorsAccordingToParty(l.label) +"1)");
          });

        }
      }

        chartOptions = {
          responsive: true,
          title: {
            display: false        }
        };

        onChartClick(event) {
          console.log(event);
          if(event.active[0]!= null)
          {
            this.router.navigate(['/parti/', this.dataManager.getPartyInitials(event.active[0]._model.label)]);
          }
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

