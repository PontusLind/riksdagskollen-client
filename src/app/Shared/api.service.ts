import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

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
    }
    getLedamot(ledamot: string){
        return this.http.get(this.serverURL + "Ledamots/" + ledamot)
    }
    getParti(parti: string){
        return this.http.get(this.serverURL + "Partis/" + parti) 
    }

    getLedamotRiksdagAPI(ledamot: string){
        this.getRiksdagsURL(ledamot);
        return this.http.get(this.riksdagsURL)
    }
}