import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byParty'
})



export class FilterByPartyPipe implements PipeTransform  {
    
  transform(items: any[], party : string): any[] {
    if(!items) return [];
    if(!party) return items;
    party = party.toLowerCase();
return items.filter( it => {
      return (it.parti.toLowerCase().includes(party));
    });
   }
}
