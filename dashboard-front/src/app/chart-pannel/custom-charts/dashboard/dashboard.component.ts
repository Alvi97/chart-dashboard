import { PeopleService } from './../../../services/people.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';
import { MessageServiceService } from '../../../services/message-service.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  
  //Pie chart for origin ends here

  constructor(private PeopleService: PeopleService,
    private snackbar: MatSnackBar,
    private sharedService: MessageServiceService
  ) {
  
  }

  ngOnInit(): void {
  }



  deleteAll() {
    this.PeopleService.deleteAllPeople().subscribe(() => {
      console.log('deleted all people');
      this.snackbar.open('All People Deleted succefully', 'OK', {
        duration: 5000,
        panelClass: ['style-danger'],
      });
    });
    this.sharedService.sendClickEvent();
  }
}
