import * as tslib_1 from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { DynamicControlDirective } from '../../core/dynamic-control.directive';
let DynamicPreviewControlComponent = class DynamicPreviewControlComponent {
    constructor(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    ngOnInit() {
        this.load();
    }
    loadComponent() {
        this.load();
    }
    load() {
        if (this.menuItem != null) {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.menuItem.previewControlType);
            const viewContainerRef = this.componentHost.viewContainerRef;
            viewContainerRef.clear();
            const componentRef = viewContainerRef.createComponent(componentFactory);
            // (componentRef.instance as ControlComponent).viewModel = this.editorComponent.viewModel;
        }
    }
};
tslib_1.__decorate([
    ViewChild(DynamicControlDirective, { static: true })
], DynamicPreviewControlComponent.prototype, "componentHost", void 0);
tslib_1.__decorate([
    Input()
], DynamicPreviewControlComponent.prototype, "menuItem", void 0);
DynamicPreviewControlComponent = tslib_1.__decorate([
    Component({
        selector: 'app-dynamic-preview-control',
        templateUrl: './dynamic-preview-control.component.html',
        styleUrls: ['./dynamic-preview-control.component.scss']
    })
], DynamicPreviewControlComponent);
export { DynamicPreviewControlComponent };
//# sourceMappingURL=dynamic-preview-control.component.js.map