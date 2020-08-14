import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoronavirusComponent} from '../app/chart-pannel/data-source/coronavirus/coronavirus.component';
import {DeathsAndRecoveriesComponent} from '../app/chart-pannel/data-source/deaths-and-recoveries/deaths-and-recoveries.component';
import {ChartPannelComponent} from '../app/chart-pannel/chart-pannel.component'
import {DashboardComponent} from '../app/chart-pannel/custom-charts/dashboard/dashboard.component'


const routes: Routes = [
  {path:'', component:ChartPannelComponent},
  {path:'albCorona', component:CoronavirusComponent},
  {path:'deathandrecovery', component:DeathsAndRecoveriesComponent},
  {path:'dashboard', component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
