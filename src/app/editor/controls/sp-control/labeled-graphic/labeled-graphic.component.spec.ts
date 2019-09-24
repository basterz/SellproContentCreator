import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledGraphicComponent } from './labeled-graphic.component';

describe('LabeledGraphicComponent', () => {
  let component: LabeledGraphicComponent;
  let fixture: ComponentFixture<LabeledGraphicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeledGraphicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeledGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
