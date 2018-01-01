import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../Shared/api.service';
import { error } from 'util';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
  selectedParty: string;

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.selectedParty = this.route.snapshot.params['selectedParty'];
    this.route.params.subscribe((params: Params) => this.selectedParty = params['selectedParty']);
    if (this.selectedParty != undefined) {
      this.api.getParti(this.selectedParty).subscribe(
        (response) => {const data = response.json(); console.log(data)},
        (error) => console.log(error)
      );    
    }
  }

}
