import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  dataCompleted:Array<any> = [
    {
        name: "RISK_RESULTS",
        status: "10 seconds ago",
        action: ""
    },
    {
        name: "RISK_COMPUTE_JOB",
        status: "1 minute ago",
        action: ""
    },
    {
        name: "LIQUIDITY_DASHBOARD_DATA",
        status: "2 hours ago",
        action: ""
    },
    {
        name: "RISK_COMPUTE_JOB",
        status: "2 hours ago",
        action: ""
    },
    {
        name: "RISK_RESULTS",
        status: "10 seconds ago",
        action: ""
    },
    {
        name: "RISK_COMPUTE_JOB",
        status: "40 seconds ago",
        action: ""
    }
  ]
}
