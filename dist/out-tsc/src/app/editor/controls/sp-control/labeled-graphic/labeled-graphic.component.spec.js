import { async, TestBed } from '@angular/core/testing';
import { LabeledGraphicComponent } from './labeled-graphic.component';
describe('LabeledGraphicComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LabeledGraphicComponent]
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
//# sourceMappingURL=labeled-graphic.component.spec.js.map