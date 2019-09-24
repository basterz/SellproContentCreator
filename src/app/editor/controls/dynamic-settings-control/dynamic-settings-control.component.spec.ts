import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSettingsControlComponent } from './dynamic-settings-control.component';

describe('DynamicSettingsControlComponent', () => {
  let component: DynamicSettingsControlComponent;
  let fixture: ComponentFixture<DynamicSettingsControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicSettingsControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicSettingsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
