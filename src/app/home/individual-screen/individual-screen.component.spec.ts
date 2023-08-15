import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualScreenComponent } from './individual-screen.component';

describe('IndividualScreenComponent', () => {
  let component: IndividualScreenComponent;
  let fixture: ComponentFixture<IndividualScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
