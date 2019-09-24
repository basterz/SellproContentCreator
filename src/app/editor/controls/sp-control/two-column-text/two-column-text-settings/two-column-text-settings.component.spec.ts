import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnTextSettingsComponent } from './two-column-text-settings.component';

describe('TwoColumnTextSettingsComponent', () => {
  let component: TwoColumnTextSettingsComponent;
  let fixture: ComponentFixture<TwoColumnTextSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoColumnTextSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumnTextSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
