import { async, TestBed } from '@angular/core/testing';
import { DynamicSettingsControlComponent } from './dynamic-settings-control.component';
describe('DynamicSettingsControlComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DynamicSettingsControlComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DynamicSettingsControlComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=dynamic-settings-control.component.spec.js.map