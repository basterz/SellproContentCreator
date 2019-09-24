import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextOverImageSettingsComponent } from './text-over-image-settings.component';

describe('TextOverImageSettingsComponent', () => {
  let component: TextOverImageSettingsComponent;
  let fixture: ComponentFixture<TextOverImageSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextOverImageSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextOverImageSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
