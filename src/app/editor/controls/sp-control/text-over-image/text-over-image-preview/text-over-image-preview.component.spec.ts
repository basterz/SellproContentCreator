import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextOverImagePreviewComponent } from './text-over-image-preview.component';

describe('ImagePreviewComponent', () => {
  let component: TextOverImagePreviewComponent;
  let fixture: ComponentFixture<TextOverImagePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextOverImagePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextOverImagePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
