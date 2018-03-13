import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partyButten',
  template: `
    <div>
    <a (click)="onCharacter(partyQuery)">{{partyQuery}}</a>
    </div>
    `
})

export class PartyButtenComponent  {
  @Input() partyQuery: string;

  constructor(private router: Router) { }

  onCharacter(id) {
    this.router.navigate(['/parti/', id]);
  }

}


