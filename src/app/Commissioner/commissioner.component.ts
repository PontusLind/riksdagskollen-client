import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../Shared/api.service';
import { Ledamot, PersonR } from '../Shared/classes.service';
import { error } from 'util';


@Component({
  selector: 'app-commissioner',
  templateUrl: './commissioner.component.html',
  styleUrls: ['./commissioner.component.css']
})
export class CommissionerComponent implements OnInit {
  selectedCommissioner: string;
  data: object;
  topText: string = "Parti";

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.selectedCommissioner = this.route.snapshot.params['selectedCommissioner'];
    this.route.params.subscribe((params: Params) => this.selectedCommissioner = params['selectedCommissioner']);
    if (this.selectedCommissioner != undefined)   {

      this.api.getLedamot(this.selectedCommissioner).subscribe(
        (ledamot : Ledamot []) => this.data = ledamot,
        (error) => console.log(error)
      );
      
      this.api.getLedamotRiksdagAPI(this.selectedCommissioner).subscribe(
        (response) => {const data = response.json(); console.log(data)},
        (error) => console.log(error)
      );
    }
  }

}
