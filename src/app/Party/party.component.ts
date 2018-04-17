import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../Shared/api.service';
import { Parti, Ledamot } from '../Shared/classes.service';
import { error } from 'util';
import { DataManagerService } from '../Shared/dataManager.service';


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

  constructor(private route: ActivatedRoute, private api: ApiService, private dataManager : DataManagerService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.selectedParty = params['selectedParty']);
  }
}
