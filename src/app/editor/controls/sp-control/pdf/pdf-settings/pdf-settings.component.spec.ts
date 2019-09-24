import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfSettingsComponent } from './pdf-settings.component';

describe('PdfSettingsComponent', () => {
  let component: PdfSettingsComponent;
  let fixture: ComponentFixture<PdfSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
