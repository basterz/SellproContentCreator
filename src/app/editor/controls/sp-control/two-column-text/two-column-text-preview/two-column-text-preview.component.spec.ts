import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnTextPreviewComponent } from './two-column-text-preview.component';

describe('TextPreviewComponent', () => {
  let component: TwoColumnTextPreviewComponent;
  let fixture: ComponentFixture<TwoColumnTextPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoColumnTextPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumnTextPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
