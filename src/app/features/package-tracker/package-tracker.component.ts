import { Component } from '@angular/core';
import { OmniButtonModule, OmniFormsModule, OmniModalModule, OmniDialogModule, OmniIconButtonModule, OmniButtonGroupModule, OmniSelectModule, OmniStatusBadgeModule, OmniIconModule, OmniInputSearchModule, OmniLayoutModule, OmniNgModule, OmniPaginationModule, OmniTableModule, OmniTextModule, OmniThemeModule, OmniTagModule, OmniAppModule, OmniDatePickerModule, OmniCheckboxModule } from '@cof/omni-ng'
import {
  UiCloseLined,
} from '@cof/omni-gravity-icons-templates'
import { reportOptions } from '../job-monitor/constants';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-package-tracker',
  standalone: true,
  imports: [
    HttpClientModule,
    OmniDatePickerModule,
    OmniAppModule,
    OmniNgModule,
    CommonModule,
    OmniLayoutModule,
    OmniTextModule,
    OmniFormsModule,
    OmniTableModule,
    OmniButtonModule,
    OmniIconButtonModule,
    OmniIconModule,
    OmniInputSearchModule,
    OmniPaginationModule,
    OmniStatusBadgeModule,
    OmniSelectModule,
    OmniButtonGroupModule,
    OmniTagModule,
    FormsModule,
    ReactiveFormsModule,
    OmniThemeModule,
    OmniModalModule,
    OmniDialogModule,
    OmniCheckboxModule
  ],
  templateUrl: './package-tracker.component.html',
  styleUrl: './package-tracker.component.scss'
})
export class PackageTrackerComponent {
  currentDate: Date = new Date();
  checkboxOptions = reportOptions;
  selectedDate: any;
  tradingDeskData: any;
  visible = false;
  iconClose = UiCloseLined;
  selectedMode = "history";
  selectedTradingTopic = { label: "", checked: false };
  coreReportsOptions: any = [];
  selectedReportIds: number[] = [];
  sentEmailSuccessfully!: boolean;
  email: string = "";
  subject: string = "";
  message: string = "";
  statusModal = false;

  currentPage = 0;
  itemsPerPage: any = 10;
  totalItems: any;
  columns: any = [{ label: "Package Name", key: "packageName" }, { label: "Status", key: "status" }, { label: "Group Name", key: "groupName" }];
  filteredData:Array<any> = [
    {
      packageName: "Commercial Commodity - Customer Derivatives",
      status: "Awaiting Release",
      groupName: "Derivative"
    },
    {
      packageName: "Capital Markets Product Control",
      status: "Awaiting 2nd",
      groupName: "TS"
    },
    {
      packageName: "Commercial Capital Markets Bridge Portfolio ",
      status: "Complete",
      groupName: "DCM"
    },
    {
      packageName: "Treasury Rates - Customer Derivatives ",
      status: "Complete",
      groupName: "Derivative"
    },
    {
      packageName: "Commodity Flash PnL Sign-Off ",
      status: "Awaiting 1st",
      groupName: "Treasury FX"
    },
    {
      packageName: "Other Trading Activity Metrics",
      status: "Awaiting 1st",
      groupName: "Derivative"
    }
  ];
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.handleDatePickerCleared();
    this.http.get("http://localhost:8080/desks").subscribe((data: any) => {
      this.tradingDeskData = data;

    });
  }

  handleDatePickerDateCalendarClick(date: Date | null) {
    this.selectedDate = date?.toISOString().split("T")[0];
    console.log("date", this.selectedDate);
  }

  handleDatePickerCleared() {
    this.selectedDate = this.currentDate.toLocaleDateString();
  }

  openEmail() {
    this.openSendEmailModal();
  }

  openSendEmailModal() {
    this.visible = true;
  }

  closeModal() {
    this.visible = false;
    this.sentEmailSuccessfully = false;
  }

  modalClosed() {
    this.visible = false;
    this.sentEmailSuccessfully = false;
  }

  selectMode(type: string) {
    this.selectedMode = type;
  }

  onChangeTradingDesk(item: any) {
    const data = this.tradingDeskData.find((desk: any) => desk.id === Number(item.value));
    this.selectedTradingTopic = { label: data.deskName, checked: false };
    this.coreReportsOptions = data.coreReports;
  }

  onReportSelection(id: any, event: any): void {
    if (event.checked) {
      this.selectedReportIds.push(id);
    } else {
      this.selectedReportIds = this.selectedReportIds.filter(
        (selectedReportId: number) => selectedReportId !== id
      );
    }
  }

  onView() {
    this.selectedDate = new Date(this.selectedDate)?.toISOString().split("T")[0].split("/").join("-");
    this.selectedReportIds.forEach((selectedReportId: number) => {
      const url = `http://localhost:8080/riskreport/history?reportid=${selectedReportId}&analysisdate=${this.selectedDate}&type=${this.selectedMode}`;
      window.open(url, '_blank');
    });
  }


  sendEmail() {
    const payload = {
      "subject": this.subject,
      "email": this.email,
      "message": this.message,
      "reports": this.selectedReportIds.map((selectedReportId: number) => ({
        reportId: selectedReportId,
        analysisDate: new Date(this.selectedDate)?.toISOString().split("T")[0].split("/").join("-"),
        type: this.selectedMode,
      }))
    }
    this.http
      .post('http://localhost:8080/riskreport/email', payload)
      .subscribe((data: any) => {
        this.sentEmailSuccessfully = true;
      });
  }

  //========================

  sortByObjectKey(key: any) {
    
  };

  openJobDetailModal (job:any) {
    this.visible = true;
  }

  openChangeStatusModal() {
    this.visible = false;
  }

  updateCurrentPage(e: any) {
    this.currentPage = e.page !== undefined ? e.page : e.currentPage
    this.itemsPerPage = e.itemsPerPage
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
   // this.filteredData = this.originalData.slice(startIndex, endIndex);
  }

}
