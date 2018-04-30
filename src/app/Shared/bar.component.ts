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
  <canvas style="min-height: 300px"
      baseChart
      [chartType]="'horizontalBar'"
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
      datasets: any [] = [];
      color : any [] = [];
      chartOptions : any; 
      constructor(private dataManager : DataManagerService, private router: Router) {
        this.chartOptions = {
          responsive: true,
          maintainAspectRatio: false,
          options: {
            title:{
              display: false
            }
          },    
          tooltips :{
            enabled: true
          } ,  
          layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        }
        };
      }

      ngOnChanges(changes) {
        if (changes.data.currentValue != undefined) {
          var d = changes.data.currentValue;
          d = this.dataManager.filterData(d);
          d = this.dataManager.orderData(d);
          this.color[0] = {backgroundColor : [], borderColor : [], borderWidth : 1}
          this.datasets.push({label: "Procent", data : [] = []});
          d.forEach(l => {        
            if(screen.availWidth > 570)
              this.label.push(this.dataManager.getPartyFullName(l.label));
            else
              this.label.push(l.label);

            this.datasets[0].data.push(l.data.toFixed(1));
            this.color[0].backgroundColor.push(this.dataManager.setColorsAccordingToParty(l.label) +"0.8)");
            this.color[0].borderColor.push(this.dataManager.setColorsAccordingToParty(l.label) +"1)");
          });
        }
      }

        onChartClick(event) {
          if(event.active[0]!= null)
          {
            this.router.navigate(['/parti/', this.dataManager.getPartyInitials(event.active[0]._model.label)]);
          }
        }
        
    }