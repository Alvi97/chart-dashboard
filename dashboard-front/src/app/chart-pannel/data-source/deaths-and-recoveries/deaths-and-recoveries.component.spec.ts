import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathsAndRecoveriesComponent } from './deaths-and-recoveries.component';

describe('DeathsAndRecoveriesComponent', () => {
  let component: DeathsAndRecoveriesComponent;
  let fixture: ComponentFixture<DeathsAndRecoveriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathsAndRecoveriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathsAndRecoveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
