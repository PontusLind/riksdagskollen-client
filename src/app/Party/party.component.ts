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
  searchQuery : string = "selectedParty";
  selectedParty: string;
  data: object;
  topText: string = "Parti";

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.selectedParty = params['selectedParty']);
  }

}
