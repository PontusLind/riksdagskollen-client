import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../Shared/api.service';
import { DataManagerService } from '../Shared/dataManager.service';
// import { BarComponent } from '../Shared/bar.component';
import { PartiProcent, Ledamot, PersonR } from '../Shared/classes.service';
import { error } from 'util';
import { Chart } from 'chart.js';
import { concat } from 'rxjs/operators/concat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  chart : Chart = [] ; // This will hold our chart info
  _partiProcent : PartiProcent

  data: object [];
  topText: string = "topText";
  selectedCommissioner: string;

  constructor(private route: ActivatedRoute, private api: ApiService, private dataManager : DataManagerService) {}

  ngOnInit() {
    this.selectedCommissioner = this.route.snapshot.params['selectedCommissioner'];
    this.route.params.subscribe((params: Params) => this.selectedCommissioner = params['selectedCommissioner']);

    this.api.getPartiProcent().subscribe(
      (partiProcent : PartiProcent []) => {
        this.data = this.dataManager.transformPartiProcent(partiProcent);
        },
        (error) => console.log(error),
  
    );
    
    if (this.selectedCommissioner != undefined) {
      this.api.getLedamot(this.selectedCommissioner).subscribe(
        (ledamot : Ledamot) => console.log(ledamot),
        (error) => console.log(error)
      );
      this.api.getLedamotRiksdagAPI(this.selectedCommissioner).subscribe(
        (personR : PersonR) => console.log(personR),
        (error) => console.log(error)
      );
    }
  }

  getPartiProcent(){
    if (this._partiProcent != null && this._partiProcent !== undefined) {  
      return this._partiProcent;
    }; 
  }  
}