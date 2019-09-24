import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnTextComponent } from './text.component';

describe('TextComponent', () => {
  let component: TwoColumnTextComponent;
  let fixture: ComponentFixture<TwoColumnTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoColumnTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumnTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
