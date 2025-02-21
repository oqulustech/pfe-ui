import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OmniNgModule } from '@cof/omni-ng';
import { OmniContainerModule } from '@cof/omni-ng';
import {
  OmniAttributeModule,
  OmniAppModule,
  OmniFormsModule,
  OmniLayoutModule,
  OmniTextModule,
  OmniTitleActionModule,
} from '@cof/omni-ng'
import { JobMonitorComponent } from '../job-monitor/job-monitor.component';
import { RiskReportComponent } from '../risk-report/risk-report.component';
import { PackageTrackerComponent } from '../package-tracker/package-tracker.component';
import { IssuesLogComponent } from '../issues-log/issues-log.component';{}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, OmniAttributeModule,
    OmniAppModule,
    OmniFormsModule,
    OmniLayoutModule,
    OmniTextModule,
    OmniTitleActionModule, 
    OmniNgModule, 
    OmniContainerModule, 
    JobMonitorComponent, 
    RiskReportComponent, 
    PackageTrackerComponent, 
    IssuesLogComponent],
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {}

  gotoDashboard () {
    this.router.navigate(['dashboard']); 
   }

   gotoTableView () {
    this.router.navigate(['job-monitor']); 
   }

   gotoLogFile () {
    this.router.navigate(['log-file']); 
   }
}
