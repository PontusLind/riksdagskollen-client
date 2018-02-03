import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../Shared/api.service';
import { Parti, Ledamot } from '../Shared/classes.service';
import { error } from 'util';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
  selectedParty: string;
  data: object;
  topText: string = "Parti";

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.selectedParty = this.route.snapshot.params['selectedParty'];
    this.route.params.subscribe((params: Params) => this.selectedParty = params['selectedParty']);
    if (this.selectedParty != undefined) {
      this.api.getParti(this.selectedParty).subscribe(
        (parti : Parti) => {this.data = parti},
        (error) => console.log(error)
      );    
    }
  }

}
