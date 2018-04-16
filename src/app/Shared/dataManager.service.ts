import { Ledamot, LedamotProcent, Parti, PartiProcent, PersonR } from './classes.service';
import { transition } from '@angular/core/src/animation/dsl';
import { error } from 'util';
import { concat } from 'rxjs/operator/concat';

export class DataManagerService {

    transformPartiProcent(partiProcent: PartiProcent[]) {
        let listOfPartys: Party[];

        for (let p of partiProcent) {
            var b = false;

            if (listOfPartys == undefined) {
                listOfPartys = [new Party(p.parti, p.procentFrånvaro, 0)];
                b = true;
            }

            if (listOfPartys != undefined && !b) {
                for (let index = 0; index < listOfPartys.length; index++) {
                    if (p.parti == listOfPartys[index].party) {
                        listOfPartys[index].percent += p.procentFrånvaro;
                        listOfPartys[index].quantity += 1;
                        b = true;
                    }
                }
            }

            if (listOfPartys != undefined && !b) {
                listOfPartys.push(new Party(p.parti, p.procentFrånvaro, 0));
            }
        }
        let chartData;
        for (let index = 0; index < listOfPartys.length; index++) {
            if (chartData == undefined) {
                chartData = [{ data: listOfPartys[index].percent / listOfPartys[index].quantity, label: listOfPartys[index].party }];
            } else {
                chartData.push({ data: listOfPartys[index].percent / listOfPartys[index].quantity, label: listOfPartys[index].party });
            }
        }
        return chartData;
    }

    setColorsAccordingToParty(label: string ) {
        var colure;


        switch (label.toUpperCase()) {
            case "V": {
                colure = "rgba(255, 0, 0, ";
                break;
            }
            case "S": {
                colure = "rgba(230, 10, 10, ";
                break;
            }
            case "MP": {
                colure = "rgba(0, 255, 0, ";
                break;
            }
            case "C": {
                colure = "rgba(0, 240, 0, ";
                break;
            }
            case "L": {
                colure = "rgba(0, 0, 204, ";
                break;
            }
            case "M": {
                colure = "rgba(0, 0, 255, ";
                break;
            }
            case "KD": {
                colure = "rgba(0, 128, 255, ";
                break;
            }
            case "SD": {
                colure = "rgba(255, 255, 51, ";
                break;
            }
            default: {
                colure = "rgba(128, 128, 128, ";
                break;
            }
        }

        return colure;
    };

    getPartyFullName(p: string) {
        switch (p.toUpperCase()) {
            case "V":
                return "Vänsterpartiet";

            case "S":
                return "Socialdemokraterna";

            case "MP":
                return "Miljöpartiet";

            case "C":
                return "Centerpartiet";

            case "L":
                return "Liberalerna";

            case "M":
                return "Moderaterna";

            case "KD":
                return "Kristdemokraterna";

            case "SD":
                return "Sverigedemokraterna";

            default:
                return "-";

        }
    };

    getPartyInitials(p: string) {
        switch (p) {
            case "Vänsterpartiet":
                return "V";

            case "Socialdemokraterna":
                return "S";

            case "Miljöpartiet":
                return "MP";

            case "Centerpartiet":
                return "C";

            case "Liberalerna":
                return "L";

            case "Moderaterna":
                return "M";

            case "Kristdemokraterna":
                return "KD";

            case "Sverigedemokraterna":
                return "SD";

            default:
                return "-";
        }
    };

    percentage(p : {alt1 : number, alt2 : number, alt3 : number, alt4 : number} [] ){
        let l = p.length
        let a1 = 0;
        let a2 = 0;
        let a3 = 0;
        let a4 = 0;
        
        p.forEach(pa => {
            a1 += pa[0];
            a2 += pa[1];
            a3 += pa[2];
            a4 += pa[3];
        });
        return [(a1/l).toFixed(1), (a2/l).toFixed(1), (a3/l).toFixed(1), (a4/l).toFixed(1)];
    }

    filterData(partys: any[])
    {
        var temp : any[] = [];
        partys.forEach(element => {
            if(element.label != "-")
                temp.push(element);
        });
        return temp;
    }

    orderData(partys: any [])
    {
        var temp : any[] = [7];
        partys.forEach(e => {
            switch (e.label.toUpperCase()) {
                case "V":
                    return temp[0] = e;
    
                case "S":
                    return temp[1] = e;
    
                case "MP":
                    return temp[2] = e;
    
                case "C":
                    return temp[3] = e;
    
                case "L":
                    return temp[4] = e;
    
                case "M":
                    return temp[5] = e;
    
                case "KD":
                    return temp[6] = e;
    
                case "SD":
                    return temp[7] = e;
    
                default:
                    return "-";
    
            }
        });
        return temp;
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

class DataSets {
    label: string;
    backgroundColor: string;
    borderColor: string;
    borderWidth: number = 1;
    hoverBackgroundColor: string;
    hoverBorderColor: string;
    data: number[];

    constructor(label: string, backgroundColor: string, borderColor: string, hoverBackgroundColor: string, hoverBorderColor: string, data: number[]) {
        this.label = label
        this.backgroundColor = backgroundColor;
        this.borderColor = borderColor;
        this.hoverBackgroundColor = hoverBackgroundColor;
        this.hoverBorderColor = hoverBorderColor;
        this.data = data;

    }
}