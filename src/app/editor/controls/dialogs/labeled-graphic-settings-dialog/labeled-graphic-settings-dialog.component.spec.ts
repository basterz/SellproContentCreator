import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledGraphicSettingsDialogComponent } from './labeled-graphic-settings-dialog.component';

describe('LabeledGraphicSettingsDialogComponent', () => {
  let component: LabeledGraphicSettingsDialogComponent;
  let fixture: ComponentFixture<LabeledGraphicSettingsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeledGraphicSettingsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeledGraphicSettingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
