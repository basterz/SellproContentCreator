import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPreviewControlComponent } from './dynamic-preview-control.component';

describe('DynamicPreviewControlComponent', () => {
  let component: DynamicPreviewControlComponent;
  let fixture: ComponentFixture<DynamicPreviewControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicPreviewControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicPreviewControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
