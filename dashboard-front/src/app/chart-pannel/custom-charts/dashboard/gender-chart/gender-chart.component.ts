import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../../../services/people.service';
import { MessageServiceService } from '../../../../services/message-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gender-chart',
  templateUrl: './gender-chart.component.html',
  styleUrls: ['./gender-chart.component.css'],
})
export class GenderChartComponent implements OnInit {
  clickEventsubscription: Subscription;
  genderdata;
  storegender = [];
  num;
  count = {};
  datagendername = [];
  datagendervalue = [];
  myarray = [];
  public doughnutChartLabels = [];
  public doughnutChartData = [];
  public doughnutChartType = 'doughnut';
  public pieChartColors: Array<any> = [
    {
      backgroundColor: ['#fc5858', '#19d863', '#fdf57d'],
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

  constructor(
    private PeopleService: PeopleService,
    private sharedService: MessageServiceService
  ) {
    this.clickEventsubscription = this.sharedService
      .getClickEvent()
      .subscribe(() => {
        this.storegender = [];
        this.doughnutChartLabels = [];
        this.doughnutChartData = [];
        this.getGenderData();
      });
  }

  ngOnInit(): void {
    this.getGenderData();
  }

  getGenderData() {
    this.doughnutChartData = [];
    this.storegender = [];
    this.myarray = [];
    this.PeopleService.getPeople().subscribe((data) => {
      this.genderdata = data;
      console.log(data, 'data from gender chart');

      this.genderdata.forEach((element) => {
        this.storegender.push(element.gjinia);
      });
      this.count = [];
      console.log(this.storegender.length, '--length of storegender');
      for (let i = 0; i < this.storegender.length; i++) {
        this.num = this.storegender[i];

        this.count[this.num] = this.count[this.num]
          ? this.count[this.num] + 1
          : 1;
      }


      for (let key in this.count) {
        // here i add the values i got on the chart array
        this.datagendername.push(key);
        this.datagendervalue.push(this.count[key]);

        this.doughnutChartLabels.push(key);
        this.doughnutChartData.push(this.count[key]);
      }
    });
  }
}
