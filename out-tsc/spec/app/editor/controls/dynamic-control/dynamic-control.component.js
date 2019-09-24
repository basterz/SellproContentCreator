import * as tslib_1 from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { DynamicControlDirective } from '../../core/dynamic-control.directive';
let DynamicControlComponent = class DynamicControlComponent {
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
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.menuItem.editorControlType);
            const viewContainerRef = this.adHost.viewContainerRef;
            viewContainerRef.clear();
            const componentRef = viewContainerRef.createComponent(componentFactory);
            componentRef.instance.viewModel = this.menuItem.viewModel;
        }
    }
};
tslib_1.__decorate([
    Input()
], DynamicControlComponent.prototype, "menuItem", void 0);
tslib_1.__decorate([
    ViewChild(DynamicControlDirective, { static: true })
], DynamicControlComponent.prototype, "adHost", void 0);
DynamicControlComponent = tslib_1.__decorate([
    Component({
        selector: 'app-dynamic-control',
        templateUrl: './dynamic-control.component.html',
        styleUrls: ['./dynamic-control.component.scss']
    })
], DynamicControlComponent);
export { DynamicControlComponent };
//# sourceMappingURL=dynamic-control.component.js.map