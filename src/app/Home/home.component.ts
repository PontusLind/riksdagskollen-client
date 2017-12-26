import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedCommissioner: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedCommissioner = this.route.snapshot.params['selectedCommissioner'];
  }
}
