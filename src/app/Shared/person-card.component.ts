import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from './api.service';
import { Ledamot } from './classes.service';
import { DataManagerService } from './dataManager.service';

@Component({
  selector: 'app-person-card',
  template: `
  <div *ngIf="data != undefined">

  <div class="card">
  <img class="card-img-top" [src]="data.personlista.person.bild_url_192" alt="Card image cap">
  <div class="card-block">
    <h4 class="card-title">{{data.personlista.person.tilltalsnamn}} {{data.personlista.person.efternamn}}</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" (click)="onCharacter(data.personlista.person.parti)">Parti: <a>{{this.dataManager.getPartyFullName(data.personlista.person.parti)}}</a></li>
    <li class="list-group-item">Valkrets: {{data.personlista.person.valkrets}}</li>
    <li class="list-group-item">Status: {{data.personlista.person.status}}</li>
    <li class="list-group-item">Födelseår: {{data.personlista.person.fodd_ar}}</li>
    <li class="list-group-item">Kön: {{data.personlista.person.kon}}</li>
  </ul>
</div>

</div>
  `,
  styles: ['a:hover { color: blue !important;} a {text-decoration: underline !important;}']
})
export class PersonCardComponent implements OnInit {
  selectedCommissioner : string;
  data : any [];
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private dataManager : DataManagerService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {this.selectedCommissioner = params['selectedCommissioner'], this.goCard()});
  }

  goCard() {
    if (this.selectedCommissioner != undefined)   {
      this.api.getLedamotRiksdagAPI(this.selectedCommissioner).subscribe(
        (response) => { this.data = response},
        (error) => console.log(error)
      );
    }
  }
  onCharacter(id)
  {
    this.router.navigate(['/parti/', id]);
  }


  

}
