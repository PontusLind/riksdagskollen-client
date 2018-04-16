import { Component, OnInit, Inject, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from './api.service';
import { DataManagerService } from './dataManager.service';
import { FilterByPartyPipe } from './filterByParty.pipe';
import { FilterLimitToPipe } from './filterLimitTo.pipe';
  


@Component({
  selector: 'app-list',
  template: `
  <div *ngIf="listed != undefined">

  <div class="card">
  <div class="card-block">
    <h4 class="card-title">{{titel}}</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li *ngFor="let c of listed | byParty : this.selectedParty | limitTo : 5" class="list-group-item" >
    <a (click)="onClic(c.intressentId)">{{c.fornamn}} {{c.efternamn}} ({{c.parti}}) {{(100 - c.b).toFixed(1)}}%</a>    
    </li>
  </ul>
</div>

</div>

  `
})
export class ListComponent implements OnInit {
  selectedParty : string;
  data: any [];
  titel ="";
  @Input() best: boolean;
  listed: any [];
  // <li class="list-group-item" *ngFor="let list of listed">{{list.}}</li>

  constructor(private route: ActivatedRoute, private api: ApiService, private dataManager : DataManagerService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {this.selectedParty = params['selectedParty']});
    this.api.getLedamotProcent().subscribe(
      (response) => { this.data = response, this.makeList(this.selectedParty)},
      (error) => console.log(error)
    );;
  }
  onClic(id)
  {
    this.router.navigate(['/ledamot/', id]);
  }
  makeList(party : string)
  {
    if(this.best)
    {
      this.listed = this.data.sort(function(a, b) {
        a.b = a.frånvarande;
        return parseFloat(a.frånvarande) - parseFloat(b.frånvarande);
    });
    this.titel = "Högst närvaro";
  }

    if(!this.best)
    {
      this.listed = this.data.sort(function(b, a) {
        a.b = a.frånvarande;
        return parseFloat(a.frånvarande) - parseFloat(b.frånvarande);
    });
    this.titel = "Lägst närvaro";
  }
}
}
