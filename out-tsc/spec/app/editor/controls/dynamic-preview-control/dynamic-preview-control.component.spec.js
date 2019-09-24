import { async, TestBed } from '@angular/core/testing';
import { DynamicPreviewControlComponent } from './dynamic-preview-control.component';
describe('DynamicPreviewControlComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DynamicPreviewControlComponent]
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
//# sourceMappingURL=dynamic-preview-control.component.spec.js.map