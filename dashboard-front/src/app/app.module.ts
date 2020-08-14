import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataSourceComponent } from './chart-pannel/data-source/data-source.component';
import { CustomChartsComponent } from './chart-pannel/custom-charts/custom-charts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartPannelComponent } from './chart-pannel/chart-pannel.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CoronavirusComponent } from './chart-pannel/data-source/coronavirus/coronavirus.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeathsAndRecoveriesComponent } from './chart-pannel/data-source/deaths-and-recoveries/deaths-and-recoveries.component';
import { CreateComponent } from './chart-pannel/custom-charts/dashboard/create/create.component';
import {ReactiveFormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DashboardComponent } from './chart-pannel/custom-charts/dashboard/dashboard.component';
import { ListComponent } from './chart-pannel/custom-charts/dashboard/list/list.component';
import { GenderChartComponent } from './chart-pannel/custom-charts/dashboard/gender-chart/gender-chart.component';
import { ExperienceAgeChartComponent } from './chart-pannel/custom-charts/dashboard/experience-age-chart/experience-age-chart.component';


@NgModule({ 
  declarations: [
    AppComponent,
    DataSourceComponent,
    CustomChartsComponent,
    ChartPannelComponent,
    CoronavirusComponent,
    DeathsAndRecoveriesComponent,
    CreateComponent,
    DashboardComponent,
    ListComponent,
    GenderChartComponent,
    ExperienceAgeChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule,
    ChartsModule,
    NgbModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDividerModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


  
 }
