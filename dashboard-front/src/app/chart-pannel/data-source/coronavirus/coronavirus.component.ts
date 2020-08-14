import { Component, OnInit } from '@angular/core';
import {CoronavirusService} from '../../../services/coronavirus.service'
import { NgZone } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-coronavirus',
  templateUrl: './coronavirus.component.html',
  styleUrls: ['./coronavirus.component.css']
})
export class CoronavirusComponent implements OnInit {


  cases=[];

  constructor(private coronavirusapi:CoronavirusService) { }

  ngOnInit(): void {
    this.getCoronaData();
  }


  getCoronaData(){
    this.coronavirusapi.getCoronavirusData().subscribe((data)=>{
    console.log(data)
      let total = Object.keys(data).length; 

      for(let i=0;i<total;i++){
        console.log()
        this.cases.push(data[i].Cases);
      }
    })
  }


   ngAfterViewInit() {
    let that = this.cases;
    setTimeout(function(){ 

      let chart = am4core.create("chartdiv", am4charts.XYChart);
      
      let data = [];  
      for(var i = 0; i < 300; i++){
        let date = new Date();
        date.setMonth(0);
        date.setHours(0,0,0,0);
        date.setDate(i);
        data.push({date:date, value: that[i]});
      }



      chart.data = data;
      am4core.options.autoSetClassName = true;
      am4core.color("#ff0000");
      // Create axes
      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 60;
      dateAxis.renderer.labels.template.fill = am4core.color("#A0CA92");
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.labels.template.fill = am4core.color("#A0CA92");
      // Create series
      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = "value";
      series.dataFields.dateX = "date";
      series.tooltipText = "{value}"
      series.stroke = am4core.color("#ff0000"); // red
      series.strokeWidth = 3;
      
      series.tooltip.pointerOrientation = "vertical";
      
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.snapToSeries = series;
      chart.cursor.xAxis = dateAxis;
      
      //chart.scrollbarY = new am4core.Scrollbar();
      chart.scrollbarX = new am4core.Scrollbar();
    

    }, 550);
    
  }
}
