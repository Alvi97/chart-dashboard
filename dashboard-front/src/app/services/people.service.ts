import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {



  uri = 'http://localhost:8091';

  constructor(private http:HttpClient) { }


  addPeople(emri,mbiemri,mosha,origjina,paga,gjinia,eksperienca){

    const people = {
      firstName:emri,
      lastName:mbiemri,
      age:mosha, 
      origjina:origjina,
      paga:paga, 
      gjinia:gjinia, 
      eksperienca:eksperienca
    }
    console.log("people service" , people)
    return this.http.post("http://localhost:8091/create" , people, {responseType: 'text'})
   
  }


  getPeople() {
    return this.http.get("http://localhost:8091/getAll")
  }

  deletePeople(id){
    return this.http.delete(`http://localhost:8091/delete/${id}`)
  }

  deleteAllPeople(){
    return this.http.delete('http://localhost:8091/deleteAll' , {responseType: 'text'})
  }


}
