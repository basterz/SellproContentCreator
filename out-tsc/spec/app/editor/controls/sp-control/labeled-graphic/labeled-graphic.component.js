import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ControlComponent } from '../control.component';
import { LabeledGraphicViewModel } from './labeled-graphic-view-model';
let LabeledGraphicComponent = class LabeledGraphicComponent extends ControlComponent {
    constructor() {
        super();
        this.viewModel = new LabeledGraphicViewModel();
    }
    ngOnInit() {
    }
};
LabeledGraphicComponent = tslib_1.__decorate([
    Component({
        selector: 'app-labeled-graphic',
        templateUrl: './labeled-graphic.component.html',
        styleUrls: ['./labeled-graphic.component.scss']
    })
], LabeledGraphicComponent);
export { LabeledGraphicComponent };
//# sourceMappingURL=labeled-graphic.component.js.map