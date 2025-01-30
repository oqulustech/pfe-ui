import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobMonitorComponent } from './job-monitor.component';

describe('JobMonitorComponent', () => {
  let component: JobMonitorComponent;
  let fixture: ComponentFixture<JobMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobMonitorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
