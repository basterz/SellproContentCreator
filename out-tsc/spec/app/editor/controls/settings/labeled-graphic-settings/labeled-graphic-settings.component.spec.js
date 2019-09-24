import { async, TestBed } from '@angular/core/testing';
import { LabeledGraphicSettingsComponent } from './labeled-graphic-settings.component';
describe('LabeledGraphicSettingsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LabeledGraphicSettingsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(LabeledGraphicSettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=labeled-graphic-settings.component.spec.js.map