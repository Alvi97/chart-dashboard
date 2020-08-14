import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPannelComponent } from './chart-pannel.component';

describe('ChartPannelComponent', () => {
  let component: ChartPannelComponent;
  let fixture: ComponentFixture<ChartPannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartPannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
