import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../Shared/api.service';
import { Ledamot, PersonR } from '../Shared/classes.service';
import { error } from 'util';
import { Observable } from 'rxjs/Rx';
import { FilterPipe } from '../Shared/filter.pipe';




@Component({
  selector: 'app-commissioner',
  templateUrl: './commissioner.component.html',
  styleUrls: ['./commissioner.component.css']
})
export class CommissionerComponent implements OnInit {
  selectedCommissioner: string;
  data: object;
  topText: string = "Parti";
  characters = [
    {}
  ];
  searchQuery: string = "selectedCommissioner";
  searchText: string;
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.selectedCommissioner = this.route.snapshot.params['selectedCommissioner'];
    this.route.params.subscribe((params: Params) => this.selectedCommissioner = params['selectedCommissioner']);
    this.api.getLedamotProcent().subscribe((ledamot: any[]) => this.characters = ledamot, (error) => console.log(error));
    if (this.selectedCommissioner != undefined) {

      this.api.getLedamot(this.selectedCommissioner).subscribe(
        (ledamot: Ledamot[]) => this.data = ledamot,
        (error) => console.log(error)
      );
    }
  }
  onCharacter(id) {
    this.searchText = "";
    this.router.navigate(['/ledamot/', id]);
  }
}
