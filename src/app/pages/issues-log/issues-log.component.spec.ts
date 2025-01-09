import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesLogComponent } from './issues-log.component';

describe('IssuesLogComponent', () => {
  let component: IssuesLogComponent;
  let fixture: ComponentFixture<IssuesLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssuesLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssuesLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
