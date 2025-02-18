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
  OmniMenuButtonModule, OmniIconModule, 
  OmniModalModule, OmniDialogModule
} from '@cof/omni-ng'
import * as icons from '@cof/omni-gravity-icons-templates';
import { ModalComponent } from '../../components/modal/modal.component';

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
    OmniMenuButtonModule, OmniIconModule,
    OmniModalModule, OmniDialogModule,
    ModalComponent
    ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  iconList = icons.UiMenuLinedSmall;
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
  headerActionsWaiting = [
    { label: 'Initiated', action: () => this.performAction('Initiated') },
    { label: 'Waiting', action: () => this.performAction('Waiting') },
    { label: 'Ready', action: () => this.performAction('Ready') }
  ];
  headerActionsFailed = [
    { label: 'Errored', action: () => this.performAction('Errored') },
    { label: 'Timed out', action: () => this.performAction('Timed out') },
    { label: 'Killed', action: () => this.performAction('Killed') }
  ];
  dataActionsRunning = [
    { label: 'Kill', action: () => this.performAction('Kill') },
    { label: 'Complete', action: () => this.performAction('Complete') }
  ];
  dataActionsFailed = [
    { label: 'Log', action: () => this.performAction('Log') },
    { label: 'Return', action: () => this.performAction('Return') }
  ];

  menuStates: { [key: string]: boolean } = {
    menu1: false,
    menu2: false,
  };
  
  menuRunningStates: boolean[] = [];
  menuFailedStates: boolean[] = [];

  /* section :modal variables*/ 
  showModal = false;
  modalWidth: number = 514;
  modalHeight: number = 380;
  modalTitle = '';
  showfooter:boolean = false;
  sharedata:any;
  tableKey = [
    {
      name: "Risk Results",
      jobid: "Job Id",
      jobgroup: "Job group",
      status: "Status",
      startTime: "Start Time",
      endTime: "End Time",
      jobAsset: "Job Asset",
      jobMetric: "job Metric",
      command: "Command",
      jobHistoryRecorded: "Job History Recorded"     
    }
  ]
  tableValue = [
    {
      name: "Risk Results",
      jobid: 234,
      jobgroup: "Risk Results",
      status: "Failed",
      startTime: "12/19/2024 2:01:14 AM",
      endTime: "12/19/2024 2:01:14 AM",
      jobAsset: "ABS",
      jobMetric: "VaR",
      command: "start/d°C:\\R1\\ABS\" Job Executor.exe",
      jobHistoryRecorded: true     
    }
  ]
  
  constructor(private cdr: ChangeDetectorRef) {}


  ngOnInit(): void {
    this.menuRunningStates = new Array(this.dataCompleted.length).fill(false); 
    this.menuFailedStates = new Array(this.dataCompleted.length).fill(false);
    this.sharedata = {
      key: this.tableKey,
      value: this.tableValue
    } 
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

  toggleActionMenu(event: MouseEvent, index: number): void {
    event.stopPropagation();
    
    // Close all static menus
    Object.keys(this.menuStates).forEach(key => {
      this.menuStates[key] = false;
    });
    
    // Toggle the clicked menu and close others
    this.menuFailedStates = this.menuFailedStates.map((state, i) => i === index ? !state : false);
    this.cdr.detectChanges();
  }
  toggleActionRunning(event: MouseEvent, index: number): void {
    event.stopPropagation();
    
    // Close all static menus
    Object.keys(this.menuStates).forEach(key => {
      this.menuStates[key] = false;
    });
    
    // Toggle the clicked menu and close others
    this.menuRunningStates = this.menuRunningStates.map((state, i) => i === index ? !state : false);
    this.cdr.detectChanges();
  }

  // Close the menu if clicked outside
  @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
      const target = event.target as HTMLElement;
      
      // If click is not on menu trigger or menu itself, close all menus
      if (!target.closest('.textWaiting') && !target.closest('.action-menu')) {
        // Close static menus
        Object.keys(this.menuStates).forEach(key => {
          this.menuStates[key] = false;
        });
  
        // Close dynamic menus
        this.menuRunningStates = this.menuRunningStates.map(() => false);
        this.menuFailedStates = this.menuFailedStates.map(() => false);
        this.cdr.detectChanges();
      }
    }

  // Perform an action
  performAction(action: string, index?: number) {
      console.log(`${action} action performed`);
      
      // Close all menus
      Object.keys(this.menuStates).forEach(key => {
        this.menuStates[key] = false;
      });
      
      if (index !== undefined) {
        this.menuRunningStates[index] = false;
        this.menuFailedStates[index] = false;
      }
      
      this.cdr.detectChanges();
    }

    // Method to open modal
    openModal() {
      this.showModal = true;
    }
    
    // Method to close modal
    closeModal(close: boolean) {
      this.showModal = close;
    }
  
}

