import * as tslib_1 from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { DynamicControlDirective } from '../../core/dynamic-control.directive';
let DynamicSettingsControlComponent = class DynamicSettingsControlComponent {
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
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.menuItem.settingsControlType);
            const viewContainerRef = this.componentHost.viewContainerRef;
            viewContainerRef.clear();
            const componentRef = viewContainerRef.createComponent(componentFactory);
            // (componentRef.instance as ControlComponent).viewModel = this.editorComponent.viewModel;
        }
    }
    clear() {
        const viewContainerRef = this.componentHost.viewContainerRef;
        viewContainerRef.clear();
        this.menuItem = null;
    }
};
tslib_1.__decorate([
    Input()
], DynamicSettingsControlComponent.prototype, "menuItem", void 0);
tslib_1.__decorate([
    ViewChild(DynamicControlDirective, { static: true })
], DynamicSettingsControlComponent.prototype, "componentHost", void 0);
DynamicSettingsControlComponent = tslib_1.__decorate([
    Component({
        selector: 'app-dynamic-settings-control',
        templateUrl: './dynamic-settings-control.component.html',
        styleUrls: ['./dynamic-settings-control.component.scss']
    })
], DynamicSettingsControlComponent);
export { DynamicSettingsControlComponent };
//# sourceMappingURL=dynamic-settings-control.component.js.map