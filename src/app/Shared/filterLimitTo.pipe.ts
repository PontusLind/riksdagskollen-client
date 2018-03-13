import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class FilterLimitToPipe {
  transform(items: any[], args: number) : any[] {
    var toBeReturnd : any [] = [];

    for (let index = 0; index <= args; index++) {
        toBeReturnd[index] = items[index];
    }
    
    return toBeReturnd;
  }
}
