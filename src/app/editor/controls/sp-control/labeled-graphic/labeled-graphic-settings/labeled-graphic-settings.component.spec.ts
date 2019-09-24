import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledGraphicSettingsComponent } from './labeled-graphic-settings.component';

describe('LabeledGraphicSettingsComponent', () => {
  let component: LabeledGraphicSettingsComponent;
  let fixture: ComponentFixture<LabeledGraphicSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeledGraphicSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeledGraphicSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
