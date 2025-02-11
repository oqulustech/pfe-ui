import { Component, OnInit, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
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
    { name: "LIQUIDITY_DASHBOARD_DATA", status: "2 hours ago", action: "" },
    { name: "RISK_COMPUTE_JOB", status: "2 hours ago", action: "" },
    { name: "RISK_RESULTS", status: "10 seconds ago", action: "" },
    { name: "RISK_COMPUTE_JOB", status: "40 seconds ago", action: "" }
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

  isMenuOpen = false;
  actions = [
    { label: 'Initiated', action: () => this.performAction('Initiated') },
    { label: 'Waiting', action: () => this.performAction('Waiting') },
    { label: 'Ready', action: () => this.performAction('Ready') }
  ];
  menuStates: { [key: string]: boolean } = {
    menu1: false,
    menu2: false
  };
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    
  }

  // Toggles the menu open/close
  toggleMenu(event: MouseEvent, menuId: string): void {
    event.stopPropagation();
    // Close all other menus
    Object.keys(this.menuStates).forEach(key => {
      if (key !== menuId) {
        this.menuStates[key] = false;
      }
    });
    // Toggle the clicked menu
    this.menuStates[menuId] = !this.menuStates[menuId];
    this.cdr.detectChanges();
  }
  // Close the menu if clicked outside
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const clickedInside = (event.target as HTMLElement).closest('.container');
    if (!clickedInside) {
      this.isMenuOpen = false;
    }
  }
  // Perform an action
  performAction(action: string) {
    console.log(`${action} action performed`);
    this.isMenuOpen = false; // Close menu after action
  }
  
  
}

