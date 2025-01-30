import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OmniButtonModule, OmniFormsModule, OmniIconButtonModule, OmniButtonGroupModule, OmniSelectModule, OmniStatusBadgeModule, OmniIconModule, OmniInputSearchModule, OmniLayoutModule, OmniNgModule, OmniPaginationModule, OmniTableModule, OmniTextModule, OmniThemeModule, OmniTagModule } from '@cof/omni-ng'
import {
  UiFilterLined,
  UiFilterLinedSmall,
} from '@cof/omni-gravity-icons-templates'
import { ApiData } from '../../mock';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SortDirection } from '@cof/omni-styles';

@Component({
  selector: 'app-job-monitor',
  imports: [
    HttpClientModule,
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
    OmniThemeModule
  ],
  templateUrl: './job-monitor.component.html',
  styleUrl: './job-monitor.component.scss',
  standalone: true
})
export class JobMonitorComponent {
  title = "pfe-ui";
  iconFilter = UiFilterLined
  iconFilterSmall = UiFilterLinedSmall
  filterButtonLabel: any = 'Show Filter';
  showAllFilters = false;
  selectedFilters: any = {};
  currentPage = 0;
  itemsPerPage: any = 10;
  originalData: any;
  totalItems: any;
  filteredData: any;
  dropdownOptions: any;
  tagsArray: any;
  availableStatuses: any = [];
  sortBy: string = "JOBNAME";
  asc: boolean = true;
  multiSelectStatusOptions: any = [];
  sortDirection?: SortDirection = 'unsorted';
  possibleStates: SortDirection[] = ['ascending', 'descending'];
  index = this.sortDirection
    ? this.possibleStates.indexOf(this.sortDirection)
    : 0;
  columns: any = [{ label: "JOB NAME", key: "jobName" }, { label: "STATUS", key: "status" }, { label: "JOB GROUP", key: "jobGroup" },
  { label: "JOB ASSET", key: "jobAsset" }, { label: "JOB METRIC", key: "jobMetric" }, { label: "START TIME", key: "startTime" },
  { label: "END TIME", key: "endTime" }, { label: "JOB ID", key: "jobId" },
  { label: "JOB HIST RECORDED", key: "jobHistRecorded" }];

  constructor(private changeDetectionRef: ChangeDetectorRef, private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get("http://localhost:8080/jobs").subscribe((data: any) => {
      this.originalData = data;
      this.totalItems = this.originalData.length;
      this.filteredData = this.originalData.slice(0, this.itemsPerPage);
      this.dropdownOptions = this.generateDropdownOptions(this.originalData);
      this.availableStatuses = [{ value: "All", label: `All: ${this.totalItems}`, isStatusSelected: false }];
      const statusCount = this.originalData.reduce((obj: any, row: { status: string | number; }) => {
        obj[row.status] = obj[row.status] ? obj[row.status] + 1 : 1;
        return obj;
      }, {})
      Object.keys(statusCount).forEach(el => {
        this.availableStatuses.push({ value: `${el}`, label: `${el} : ${statusCount[el]}`, isStatusSelected: false });
      });

      this.columns = this.columns.map((obj: any) => {
        return { ...obj, sortDirection: "unsorted" }
      })
    });
  }

  generateDropdownOptions(data: any[]) {
    const dropdownOptions: any = {};
    data.forEach((obj: { [x: string]: any; }) => {
      Object.keys(obj).forEach((key) => {
        if (!dropdownOptions[key as any]?.includes(obj[key as keyof ApiData]) && obj[key as keyof ApiData] !== null) {
          dropdownOptions[key as any] = [...(dropdownOptions[key] ?? []), obj[key as keyof ApiData]];
        }
      });
    });

    Object.keys(dropdownOptions).forEach((key) => {
      dropdownOptions[key] = dropdownOptions[key].map((el: any) => {
        return { label: el, value: el }
      })
    });

    return dropdownOptions;
  };

  toggleFilters() {
    this.showAllFilters = !this.showAllFilters;
    this.filterButtonLabel = this.showAllFilters ? 'Hide Filter' : 'Show Filter';
  }

  resetTable() {
    this.selectedFilters = {};
    this.generateFilteredData();
  }

  removeSelectedFilter(eve: any) {
    delete this.selectedFilters[eve];
    this.selectedFilters = { ...this.selectedFilters };
    this.generateFilteredData();
  }

  onFilterSelectionChange(eve: any) {
    if (this.selectedFilters[eve.source.name]) {
      this.selectedFilters[eve.source.name] = eve.source.value;
    } else {
      this.selectedFilters = { ...this.selectedFilters, [eve.source.name]: eve.source.value };
    }
    this.generateFilteredData();
  }

  generateFilteredData() {
    this.filteredData = this.originalData.filter((obj: any) => {
      const filterMap = Object.keys(this.selectedFilters).map(
        (key) =>
          !this.selectedFilters[key as keyof Partial<ApiData>]?.indexOf(
            obj[key as keyof ApiData]
          )
      );
      return filterMap.every((condition) => condition);
    });
    if (this.multiSelectStatusOptions.length)
      this.filteredData = this.filteredData.filter((row: any) => this.multiSelectStatusOptions.includes(row.status))
    this.totalItems = this.filteredData.length;
    this.filteredData = this.filteredData.slice(0, this.itemsPerPage);
    this.changeDetectionRef.detectChanges();
  };

  updateCurrentPage(e: any) {
    this.currentPage = e.page !== undefined ? e.page : e.currentPage
    this.itemsPerPage = e.itemsPerPage
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.filteredData = this.originalData.slice(startIndex, endIndex);
  }


  sortByObjectKey(
    key: keyof ApiData
  ) {
    this.columns = this.columns.map((obj: any) => {
      if (obj.key === key) {
        let index = this.possibleStates.indexOf(obj.sortDirection);
        index = this.index === this.possibleStates.length - 1 ? 0 : index + 1;
        return { ...obj, sortDirection: this.possibleStates[index] }
      }
      return { ...obj, sortDirection: "unsorted" };
    })

    if (this.sortBy === key) {
      this.asc = !this.asc;
    } else {
      this.asc = true;
    }
    this.sortBy = key;
    this.filteredData.sort((a: any, b: any) => {
      switch (typeof a[key] as any) {
        case 'string': {
          if (this.asc) {
            return (a[key] ?? "") < (b[key] ?? "") ? -1 : 1;
          } else {
            return (a[key] ?? "") > (b[key] ?? "") ? -1 : 1;
          }
        }
        case 'number': {
          if (this.asc) {
            return (a[key] as number) - (b[key] as number);
          } else {
            return (b[key] as number) - (a[key] as number);
          }
        }
        default: {
          return 0;
        }
      }
    })
  };

  onStatusRemove(statusDropdownValues: any) {
    this.multiSelectStatusOptions = this.multiSelectStatusOptions.filter((status: any) => status !== statusDropdownValues.selectedItem.value);
    this.generateFilteredData();
    this.availableStatuses = this.availableStatuses.map((status: any) => {
      if (status.value === statusDropdownValues.selectedItem.value) {
        return { ...status, isStatusSelected: false };
      }
      return status;
    })
  }

  onStatusSelect(statusDropdownValues: any) {
    this.multiSelectStatusOptions.push(statusDropdownValues.selectedItem.value);
    this.generateFilteredData();
    this.availableStatuses = this.availableStatuses.map((status: any) => {
      if (status.value === statusDropdownValues.selectedItem.value) {
        return { ...status, isStatusSelected: true };
      }
      return status;
    })
  }
}
