import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTextPreviewComponent } from './image-text-preview.component';

describe('ImagePreviewComponent', () => {
  let component: ImageTextPreviewComponent;
  let fixture: ComponentFixture<ImageTextPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageTextPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTextPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
