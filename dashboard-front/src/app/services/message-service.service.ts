import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor() { }

  private subject = new Subject<any>();
sendClickEvent() {
  this.subject.next();
}
getClickEvent(): Observable<any>{ 
  console.log("subject send" , this.subject)
  return this.subject.asObservable();
}
}
