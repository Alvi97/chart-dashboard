import { Component, OnInit } from '@angular/core';
import {CoronavirusService} from '../../../services/coronavirus.service'
import { NgZone } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
@Component({
  selector: 'app-deaths-and-recoveries',
  templateUrl: './deaths-and-recoveries.component.html',
  styleUrls: ['./deaths-and-recoveries.component.css']
})
export class DeathsAndRecoveriesComponent implements OnInit {

  totaldeaths;
  totalrecovered;
  totalconfirmed;
  constructor(private coronavirus:CoronavirusService) { }

  ngOnInit(): void {
    this.getDeathsandRecoveries()
  }

  test = []

  getDeathsandRecoveries(){
    this.coronavirus.getTotalDeathsandRecoveries().subscribe((data)=>{
      console.log(data,"d and r");
      this.test.push(data);
      console.log(this.totaldeaths,"total d");


      let chart = am4core.create("chartdiv", am4charts.PieChart);
// Add data
chart.data = [ {
  "label": "Total Cases",
  "number": this.test[0].Global.TotalConfirmed
}, {
  "label": "Total Recovered",
  "number": this.test[0].Global.TotalRecovered
},
{
  "label": "Total Deaths",
  "number": this.test[0].Global.TotalDeaths
},
{
  "label": "New Recovered",
  "number": this.test[0].Global.NewRecovered
},
{
  "label": "New Deaths",
  "number": this.test[0].Global.NewDeaths
},
 ];

// Add and configure Series
let pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "number";
pieSeries.dataFields.category = "label";
pieSeries.labels.template.fill = am4core.color("white");
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;
pieSeries.fill = am4core.color("red").lighten(0.5);

// This creates initial animation
pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;

})


    
  }

}