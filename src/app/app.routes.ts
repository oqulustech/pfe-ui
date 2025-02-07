import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { JobMonitorComponent } from './features/job-monitor/job-monitor.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { IssuesLogComponent } from './features/issues-log/issues-log.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path : "job-monitor", component: JobMonitorComponent },
    { path : "dashboard", component: DashboardComponent }
];
