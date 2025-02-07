import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { RiskReportComponent } from '../../risk-report/risk-report.component';
import { PackageTrackerComponent } from '../../dashboard/package-tracker/package-tracker.component';
import { IssuesLogComponent } from '../../dashboard/issues-log/issues-log.component';{}

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

}
