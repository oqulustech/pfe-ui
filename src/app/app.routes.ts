import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JobMonitorComponent } from './features/job-monitor/job-monitor.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: JobMonitorComponent },
    { path: 'home', component: HomeComponent },
    { path : "job-monitor", component: JobMonitorComponent },
    { path : "dashboard", component: DashboardComponent }
];