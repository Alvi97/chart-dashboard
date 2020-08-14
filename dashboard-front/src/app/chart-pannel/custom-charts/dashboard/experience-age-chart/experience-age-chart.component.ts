import { PeopleService } from '../../../../services/people.service';
import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../../../../services/message-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience-age-chart',
  templateUrl: './experience-age-chart.component.html',
  styleUrls: ['./experience-age-chart.component.css']
})
export class ExperienceAgeChartComponent implements OnInit {

  clickEventsubscription:Subscription;
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  allData;
  names=[];
  ages=[];
  experience=[];
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [], label: 'age'},
    {data: [], label: 'Experience'}
  ];


  constructor(private peopleservice:PeopleService , private sharedService:MessageServiceService) {

    this.clickEventsubscription=this.sharedService.getClickEvent().subscribe(()=>{
      this.barChartData = [
        {data: [], label: 'age'},
        {data: [], label: 'Experience'}
      ];
      this.barChartLabels = [];
      this.getData();
      })

   }

  ngOnInit(): void {
    this.getData()
    
  }


  getData(){
    this.peopleservice.getPeople().subscribe((data)=>{  
      
      this.allData=data;
      this.barChartData[0].data= [];
      this.barChartData[1].data= [];
      this.barChartLabels = [];
      this.allData.forEach(element => {
        console.log(element,"lastcompo")
        this.barChartLabels.push(element.firstName);
        this.ages.push();
        this.barChartData[0].data.push(parseInt(element.age));
        this.barChartData[1].data.push(parseInt(element.eksperienca));
      });

      
    })
  }

}
