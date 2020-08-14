import { People } from './../../../../models/people.model';
import { Component, OnInit } from '@angular/core';
import { PeopleService } from './../../../../services/people.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageServiceService } from '../../../../services/message-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  clickEventsubscription: Subscription;

  people: People[];
  displayedColumns: string[] = [
    'emri',
    'mbiemri',
    'mosha',
    'origjina',
    'paga',
    'gjinia',
    'eksperienca',
    'actions',
  ];
  dataSource = this.people;

  constructor(
    private sharedService: MessageServiceService,
    private peopleService: PeopleService,
    private snackbar: MatSnackBar
  ) {
    this.clickEventsubscription = this.sharedService
      .getClickEvent()
      .subscribe(() => {
        this.fetchPeople();
      });
  }

  ngOnInit(): void {
    this.fetchPeople();
  }

  fetchPeople() {
    console.log('fetch people');
    this.peopleService.getPeople().subscribe((data: People[]) => {
      this.people = data;
    });
  }

  deletePeople(id) {
    this.peopleService.deletePeople(id).subscribe(() => {
      this.snackbar.open('Person Deleted succefully', 'OK', {
        duration: 5000,
        panelClass: ['style-danger'],
      });
      this.fetchPeople();
    });

    this.sharedService.sendClickEvent();
  }
}
