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
}
