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
  clickEventsubscription: Subscription;
  peopledata;
  peopleorigin = [];
  count = {};
  origincount = {};
  datapiename = [];
  datapievalue = [];

  //Pie chart for origin starts here
  public pieChartLabels = [];
  public pieChartData = [];
  public pieChartType = 'pie';
  public pieChartColors: Array<any> = [
    {
      backgroundColor: ['#fc5858', '#19d863', '#fdf57d', '#3f51b5', '#ff4081'],
      borderColor: [
        'rgba(252, 235, 89, 0.2)',
        'rgba(77, 152, 202, 0.2)',
        'rgba(241, 107, 119, 0.2)',
      ],
    },
  ];
  public pieChartPlugins = [
    {
      beforeDraw(chart, easing) {
        const ctx = chart.ctx;
        const chartArea = chart.chartArea;
        const top = chartArea.top; // Use a value of 0 here to include the legend

        ctx.save();
        ctx.fillStyle = 'transparent';

        ctx.fillRect(
          chartArea.left,
          top,
          chartArea.right - chartArea.left,
          chartArea.bottom - top
        );
        ctx.restore();
      },
    },
  ];

  //Pie chart for origin ends here

  constructor(
    private PeopleService: PeopleService,
    private sharedService: MessageServiceService,
    private snackbar: MatSnackBar
  ) {
    this.clickEventsubscription = this.sharedService
      .getClickEvent()
      .subscribe(() => {
        this.peopleorigin = [];
        this.pieChartLabels = [];
        this.pieChartData = [];
        this.getChartData();
      });
  }

  ngOnInit(): void {
    this.getChartData();
  }

  getChartData() {
    this.PeopleService.getPeople().subscribe((data) => {
      this.peopledata = data;
      this.peopledata.forEach((element) => {
        this.peopleorigin.push(element.origjina);
      });
      this.count = [];
      for (let i = 0; i < this.peopleorigin.length; i++) {
        let num = this.peopleorigin[i];
        this.count[num] = this.count[num] ? this.count[num] + 1 : 1;
      }
      for (let key in this.count) {
        this.datapiename.push(key);
        this.datapievalue.push(this.count[key]);

        console.log(this.datapiename, 'name');
        console.log(this.datapievalue, 'value');

        this.pieChartLabels.push(key);
        this.pieChartData.push(this.count[key]);
      }
    });
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
