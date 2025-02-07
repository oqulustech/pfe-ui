import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { JobMonitorComponent } from './features/job-monitor/job-monitor.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { IssuesLogComponent } from './features/issues-log/issues-log.component';
import { PackageTrackerComponent } from './features/package-tracker/package-tracker.component';
import { RiskReportComponent } from './features/risk-report/risk-report.component';
import { LogFileComponent } from './features/log-file/log-file.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path : "job-monitor", component: JobMonitorComponent },
    { path : "dashboard", component: DashboardComponent },
    { path : "issues-log", component: IssuesLogComponent },
    { path : "package-tracker", component: PackageTrackerComponent },
    { path : "risk-report", component: RiskReportComponent },
    { path : "log-file", component: LogFileComponent }
];
