import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAgeChartComponent } from './experience-age-chart.component';

describe('ExperienceSalaryChartComponent', () => {
  let component: ExperienceAgeChartComponent;
  let fixture: ComponentFixture<ExperienceAgeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceAgeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceAgeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { 
    expect(component).toBeTruthy(); 
  });
});
