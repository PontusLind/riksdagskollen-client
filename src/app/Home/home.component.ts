import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../Shared/api.service';
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
      (response) => {const data = response.json(); console.log(data)},
      (error) => console.log(error)
    );
    console.log(this.selectedCommissioner);
    
    if (this.selectedCommissioner != undefined) {
      this.api.getLedamot(this.selectedCommissioner).subscribe(
        (response) => {const data = response.json(); console.log(data)},
        (error) => console.log(error)
      );
    }
  }
  
}
