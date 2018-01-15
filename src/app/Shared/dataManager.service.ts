import { Ledamot, LedamotProcent, Parti, PartiProcent, PersonR  } from './classes.service';
import { transition } from '@angular/core/src/animation/dsl';
import { error } from 'util';
import { concat } from 'rxjs/operator/concat';

export class DataManagerService {    
    
    transformPartiProcent(partiProcent : PartiProcent []){   
        let listOfPartys : Party [];

        for (let p of partiProcent) {
            var b = false;

            if (listOfPartys == undefined) 
            {
                listOfPartys = [new Party(p.parti, p.procentFrånvaro, 0)];
                b = true;
            }  
            
            if (listOfPartys != undefined && !b)
            {       
                for (let index = 0; index < listOfPartys.length; index++) {
                    if (p.parti == listOfPartys[index].party) {
                        listOfPartys[index].percent += p.procentFrånvaro;
                        listOfPartys[index].quantity += 1;
                        b = true;
                    }                    
                }
            } 

            if (listOfPartys != undefined && !b) 
            {
                listOfPartys.push(new Party(p.parti, p.procentFrånvaro, 0)); 
            } 
        }
        let chartData;
        for (let index = 0; index < listOfPartys.length; index++) {
            if (chartData == undefined) {
                chartData = [{ data: [listOfPartys[index].percent / listOfPartys[index].quantity] , label: listOfPartys[index].party }];            
            }else{
                chartData.push( { data: [listOfPartys[index].percent / listOfPartys[index].quantity] , label: listOfPartys[index].party });            
            }
        }
        return chartData;
    }   
}

class Party {
    party: string;
    percent: number;
    quantity: number;

    constructor(party: string, percent: number, quantity: number) {
        this.party = party;
        this.percent = percent;
        this.quantity = quantity;
    }
}