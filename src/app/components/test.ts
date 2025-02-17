showModal = false;
modalWidth: number = 514;
modalHeight: number = 200;
modalTitle = 'Modal Title';
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


ngOnInit() {
  this.sharedata = {
    key: this.tableKey,
    value: this.tableValue
  }
}

// Method to open modal
openModal() {
  this.showModal = true;
}

// Method to close modal
closeModal(close: boolean) {
  this.showModal = close;
}