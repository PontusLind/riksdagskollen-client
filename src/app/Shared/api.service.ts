import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';

@Injectable()

export class ApiService {
    serverURL: string = "http://projectfreedomserver.azurewebsites.net/api/";
    riksdagsURL: string = "";
    ledarmot: any [];
    
    getRiksdagsURL(id:string) {
        this.riksdagsURL = "http://data.riksdagen.se/personlista/?iid=" + id + "&fnamn=&enamn=&f_ar=&kn=&parti=&valkrets=&rdlstatus=&org=&utformat=json=";
        console.log(this.riksdagsURL);
    }

    constructor(private http: Http){
    }

    getPartiProcent(){
        return this.http.get(this.serverURL + "PartiProcents")
        .map(
            (response : Response) => {
                const data = response.json();
                return data;
            }); 
    }

    getLedamotProcent(){
        return this.http.get(this.serverURL + "LedamotProcents")
        .map(
            (response : Response) => {
                this.ledarmot = response.json();
                return this.ledarmot;
            }); 
    }

    getLedamot(ledamot: string){
        return this.http.get(this.serverURL + "Ledamots/" + ledamot)
        .map(
            (response : Response) => {
                const data = response.json();
                return data;
            }); 
    }
    getParti(parti: string){
        return this.http.get(this.serverURL + "Partis/" + parti) 
        .map(
            (response : Response) => {
                const data = response.json();
                return data;
            }); 
    }

    getLedamotRiksdagAPI(ledamot: string){
        this.getRiksdagsURL(ledamot);
        return this.http.get(this.riksdagsURL)
        .map(
            (response : Response) => {
                const data = response.json();
                return data;
            }); 
    }
}