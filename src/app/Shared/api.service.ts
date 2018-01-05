import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';

@Injectable()

export class ApiService {
    serverURL: string = "http://localhost:64019/api/";
    riksdagsURL: string = "";
    
    
    getRiksdagsURL(id:string) {
        this.riksdagsURL = "http://data.riksdagen.se/personlista/?iid=" + id + "&fnamn=&enamn=&f_ar=&kn=&parti=&valkrets=&rdlstatus=&org=&utformat=json&termlista=";
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