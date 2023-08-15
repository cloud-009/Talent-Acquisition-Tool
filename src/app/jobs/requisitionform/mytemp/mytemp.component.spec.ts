import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytempComponent } from './mytemp.component';

describe('MytempComponent', () => {
  let component: MytempComponent;
  let fixture: ComponentFixture<MytempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MytempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MytempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
