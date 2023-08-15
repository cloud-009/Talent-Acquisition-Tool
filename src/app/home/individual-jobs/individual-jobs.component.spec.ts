import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualJobsComponent } from './individual-jobs.component';

describe('IndividualJobsComponent', () => {
  let component: IndividualJobsComponent;
  let fixture: ComponentFixture<IndividualJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
