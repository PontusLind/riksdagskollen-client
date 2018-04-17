import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataManagerService } from '../Shared/dataManager.service';
import { NgStyle } from '@angular/common';


@Component({
  selector: 'app-partyButten',
  template: `
    <div>
    <a id="stuff" [ngStyle]="{'background-color': coral}" (click)="onCharacter(partyQuery)">{{partyQuery.toUpperCase( )}}</a>
    </div>
    `,
    styles: ['#stuff{margin: 2px; border-radius: 12px; padding: 5px; border: 2px solid; font-weight: normal; align-content: space-around; display: flex; justify-content: center;} #stuff:hover{background-color: rgb(220,220,220);}']
    

})

export class PartyButtenComponent  {
  @Input() partyQuery: string;
  constructor(private router: Router, private dataManager : DataManagerService ) { }

  onCharacter(id) {
    this.router.navigate(['/parti/', id]);
  }
}


