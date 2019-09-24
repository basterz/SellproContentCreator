import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as CkEditor from '@ckeditor/ckeditor5-build-inline';
let ControlComponent = class ControlComponent {
    constructor() {
        this.Editor = CkEditor;
    }
    ngOnInit() {
    }
};
ControlComponent = tslib_1.__decorate([
    Component({
        selector: 'app-control',
        templateUrl: './control.component.html',
        styleUrls: ['./control.component.scss']
    })
], ControlComponent);
export { ControlComponent };
//# sourceMappingURL=control.component.js.map