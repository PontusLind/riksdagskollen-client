import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../Shared/api.service';
import { PartiProcent, Ledamot, PersonR } from '../Shared/classes.service';
import { error } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedCommissioner: string;

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.selectedCommissioner = this.route.snapshot.params['selectedCommissioner'];
    this.route.params.subscribe((params: Params) => this.selectedCommissioner = params['selectedCommissioner']);

    this.api.getPartiProcent().subscribe(
      (partiProcent : PartiProcent []) => console.log(partiProcent),
      (error) => console.log(error)
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
  
}
