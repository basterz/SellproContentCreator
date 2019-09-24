import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledGraphicPreviewComponent } from './labeled-graphic-preview.component';

describe('LabeledGraphicPreviewComponent', () => {
  let component: LabeledGraphicPreviewComponent;
  let fixture: ComponentFixture<LabeledGraphicPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeledGraphicPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeledGraphicPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
