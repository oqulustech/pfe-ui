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
  OmniMenuButtonModule, OmniIconModule
} from '@cof/omni-ng'
import * as icons from '@cof/omni-gravity-icons-templates'


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, OmniAttributeModule,
    OmniAppModule,
    OmniFormsModule,
    OmniLayoutModule,
    OmniTextModule,
    OmniTitleActionModule, 
    OmniNgModule, 
    OmniContainerModule, 
    OmniMenuButtonModule, OmniIconModule
    ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent{
  iconList = icons.UiListLinedSmall;
  iconsetting = icons.UiSettingsLined;
  iconInfo = icons.UiInfoLined;
    
  dataCompleted: Array<any> = [
    { name: "RISK_RESULTS", status: "10 seconds ago", action: "" },
    { name: "RISK_COMPUTE_JOB", status: "1 minute ago", action: "" },
    { name: "LIQUIDITY_DASHBOARD_DATA", status: "2 hours ago", action: "" },
    { name: "RISK_COMPUTE_JOB", status: "2 hours ago", action: "" },
    { name: "RISK_RESULTS", status: "10 seconds ago", action: "" },
    { name: "RISK_COMPUTE_JOB", status: "40 seconds ago", action: "" },
    { name: "RISK_RESULTS", status: "10 seconds ago", action: "" },
    { name: "RISK_COMPUTE_JOB", status: "1 minute ago", action: "" },
    // { name: "LIQUIDITY_DASHBOARD_DATA", status: "2 hours ago", action: "" },
    // { name: "RISK_COMPUTE_JOB", status: "2 hours ago", action: "" },
    // { name: "RISK_RESULTS", status: "10 seconds ago", action: "" },
    // { name: "RISK_COMPUTE_JOB", status: "40 seconds ago", action: "" }
  ];

  dataRunning: Array<any> = [
    { name: "RISK_RESULTS", status: "10 seconds ago", action: "" },
    { name: "RISK_COMPUTE_JOB", status: "1 minute ago", action: "" },
    { name: "LIQUIDITY_DASHBOARD_DATA", status: "2 hours ago", action: "" },
    { name: "RISK_COMPUTE_JOB", status: "2 hours ago", action: "" },
    { name: "RISK_RESULTS", status: "10 seconds ago", action: "" },
    { name: "RISK_COMPUTE_JOB", status: "40 seconds ago", action: "" },
    { name: "RISK_RESULTS", status: "10 seconds ago", action: "" },
    { name: "RISK_COMPUTE_JOB", status: "1 minute ago", action: "" },
    { name: "LIQUIDITY_DASHBOARD_DATA", status: "2 hours ago", action: "" },
    { name: "RISK_COMPUTE_JOB", status: "2 hours ago", action: "" },
    { name: "RISK_RESULTS", status: "10 seconds ago", action: "" },
    { name: "RISK_COMPUTE_JOB", status: "40 seconds ago", action: "" }
  ];

  dataWaiting: Array<any> = [
    { name: "RISK_RESULTS", status: "10 seconds ago", action: "" },
    { name: "RISK_COMPUTE_JOB", status: "1 minute ago", action: "" },
    { name: "LIQUIDITY_DASHBOARD_DATA", status: "2 hours ago", action: "" },
    { name: "RISK_COMPUTE_JOB", status: "2 hours ago", action: "" },
    { name: "RISK_RESULTS", status: "10 seconds ago", action: "" },
    { name: "RISK_COMPUTE_JOB", status: "40 seconds ago", action: "" },
    { name: "RISK_RESULTS", status: "10 seconds ago", action: "" },
    { name: "RISK_COMPUTE_JOB", status: "1 minute ago", action: "" },
    { name: "LIQUIDITY_DASHBOARD_DATA", status: "2 hours ago", action: "" },
    { name: "RISK_COMPUTE_JOB", status: "2 hours ago", action: "" },
    { name: "RISK_RESULTS", status: "10 seconds ago", action: "" },
    { name: "RISK_COMPUTE_JOB", status: "40 seconds ago", action: "" }
  ];

  dataFailed: Array<any> = [
    { name: "RISK_RESULTS", status: "10 seconds ago", action: "" },
    { name: "RISK_COMPUTE_JOB", status: "1 minute ago", action: "" },
    { name: "LIQUIDITY_DASHBOARD_DATA", status: "2 hours ago", action: "" },
    { name: "RISK_COMPUTE_JOB", status: "2 hours ago", action: "" },
    { name: "RISK_RESULTS", status: "10 seconds ago", action: "" },
    { name: "RISK_COMPUTE_JOB", status: "40 seconds ago", action: "" },
    { name: "RISK_RESULTS", status: "10 seconds ago", action: "" },
    { name: "RISK_COMPUTE_JOB", status: "1 minute ago", action: "" },
    { name: "LIQUIDITY_DASHBOARD_DATA", status: "2 hours ago", action: "" },
    { name: "RISK_COMPUTE_JOB", status: "2 hours ago", action: "" },
    { name: "RISK_RESULTS", status: "10 seconds ago", action: "" },
    { name: "RISK_COMPUTE_JOB", status: "40 seconds ago", action: "" }
  ];
  
  
}

