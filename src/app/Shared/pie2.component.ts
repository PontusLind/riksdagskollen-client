import { Component, OnInit, Inject, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from './api.service';
import { chart, Color } from 'chart.js';
import { concat } from 'rxjs/observable/concat';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
import { DataManagerService } from './dataManager.service';

@Component({
  selector: 'app-pie2',
  template: `
    <div *ngIf="datasets.length != 0 && datasets != undefined">
    <div style="display: block;" >
    <canvas
      style="min-width: {{innerWidth}}px;" 
      baseChart
      [labels]="labels"
      [datasets]="datasets"
      [colors]="colorsOverride"
      [options]="chartOptions"
      [chartType]="type"
      ></canvas>
  </div>
  </div>
    `
})

export class Pie2Component implements OnInit {
  @Input() searchQuery: string;
  chartOptions : any;
  innerWidth: any;


  labels: string[] = ['Ja', 'Nej', 'Avstår', 'Frånvarande'];
  type: string = 'doughnut';
  datasets: any[] = [];
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
  constructor(private dataManager: DataManagerService, private route: ActivatedRoute, private api: ApiService) {
    this.chartOptions = {
      maintainAspectRatio: true,
      responsive: true,
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
    if(window.screen.width < 500)
    {
      this.innerWidth = (window.screen.width);
    }
    else
    {
      this.innerWidth = 500;
    }
   }
   
  ngOnInit() {
    if (this.searchQuery == "selectedCommissioner") {
      this.route.params.subscribe((params: Params) => { this.apiCallCommissioner(params['selectedCommissioner'])});
    } else if (this.searchQuery == "selectedParty") {
      this.route.params.subscribe((params: Params) => { this.apiCallParty(params['selectedParty'])});
    }
  }

  apiCallCommissioner(s: string) {
    this.api.getLedamot(s).subscribe(
      (ledamot: any[]) => {this.makePieChart(ledamot)},
      (error) => console.log(error)
    );
  }

  apiCallParty(p: string) {
    this.api.getParti(p).subscribe(
      (parti: any[]) => {this.makePieChart(parti)},
      (error) => console.log(error)
    );
  }

  makePieChart(d : any []) {
    if (d != undefined) {
      let partyByYear: any[] = [];
      d.forEach(p => {
        partyByYear.push([p.ja, p.nej, p.avstår, p.frånvarande])
      });
      this.datasets = [
        {
          data: this.dataManager.percentage(partyByYear)
        }];
    }
  }
}


