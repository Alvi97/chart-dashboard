import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoronavirusService {


  uri = 'https://api.covid19api.com';


  coronavirusdata = 'https://api.covid19api.com/country/albania/status/confirmed';


  constructor(private http:HttpClient) { }


  getCoronavirusData(){
    return this.http.get(this.coronavirusdata);
  }

  getTotalDeathsandRecoveries(){
    return this.http.get(`${this.uri}/summary`)
  }


}


