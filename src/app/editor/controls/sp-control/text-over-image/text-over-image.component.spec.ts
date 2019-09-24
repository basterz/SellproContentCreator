import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextOverImageComponent } from './text.component';

describe('TextComponent', () => {
  let component: TextOverImageComponent;
  let fixture: ComponentFixture<TextOverImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextOverImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextOverImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
