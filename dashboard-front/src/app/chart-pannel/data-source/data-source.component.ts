import { DataSourceModel } from './../../models/coronavirusModel';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


@Component({
  selector: 'app-data-source',
  templateUrl: './data-source.component.html',
  styleUrls: ['./data-source.component.css']
})
export class DataSourceComponent implements OnInit {




  constructor() { }

  ngOnInit(): void {

  }

  models = [
    new DataSourceModel("albCorona" , "Coronavirus Cases Progress in Albania"),
    new DataSourceModel("deathandrecovery" , "Death And Reovery rate compared with the total cases")
  ]


  movies = [
    'Coronavirus',
    'Coronavirus map',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }


}
