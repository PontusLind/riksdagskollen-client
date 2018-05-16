import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'



@Component({
  selector: 'app-FAQ',
  template: `
    <br>
    <h2>Frågor och svar</h2>
    <br>
    <ul>
    <li class="list-unstyled" data-toggle="collapse" [attr.data-target]="'#' + item.id"    *ngFor="let item of items">
    <h3>{{item.h}}</h3>
    <p id="{{item.id}}" class="collapse">{{item.t}}</p>
    </li> 
    </ul>
    `
})

export class FAQComponent {
  items;

  constructor(private http: Http) {
    this.getJSON().subscribe(data => this.items=data.questions, error => console.log(error));
  }

  getJSON(): Observable<any> {
    return this.http.get("./../assets/FAQ.data.json")
                    .map((res:any) => res.json())
}

}