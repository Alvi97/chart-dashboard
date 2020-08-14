import { PeopleService } from './../../../../services/people.service';
import { People } from './../../../../models/people.model';
import { Component, OnInit, Input } from '@angular/core';
import {FormGroup , FormBuilder,Validators} from '@angular/forms'
import {Router} from '@angular/router'
import {MatSnackBar} from '@angular/material/snack-bar';
import { MessageServiceService } from '../../../../services/message-service.service'



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  @Input() AlertCreation: Function;

  createForm : FormGroup;
  people:People[];

  constructor(private sharedService:MessageServiceService,private fb:FormBuilder , private router:Router , private peopleService:PeopleService , private snackbar:MatSnackBar) { 


    this.createForm = this.fb.group({
      emri:'',
      mbiemri:'',
      mosha:'',
      origjina:'',
      paga:'', 
      gjinia:'',
      eksperienca:''
    })


  }

  addPeople(emri,mbiemri,mosha,origjina,paga,gjinia,eksperienca){
    console.log("componenti para");
    console.log(emri)
    this.peopleService.addPeople(emri,mbiemri,mosha,origjina,paga,gjinia,eksperienca).subscribe(()=>{
      console.log("brenda subs");
      this.snackbar.open("Person Created succefully" , 'OK' , {
        duration:5000, 
        panelClass: ['style-succes']
      });
    })
    this.sharedService.sendClickEvent();

  }   

  ngOnInit(): void {

    
  }


}