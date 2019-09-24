import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTextSettingsComponent } from './image-text-settings.component';

describe('ImageTextSettingsComponent', () => {
  let component: ImageTextSettingsComponent;
  let fixture: ComponentFixture<ImageTextSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageTextSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTextSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
