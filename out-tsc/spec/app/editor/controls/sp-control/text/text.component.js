import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ControlComponent } from '../control.component';
let TextComponent = class TextComponent extends ControlComponent {
    constructor() {
        super();
    }
    ngOnInit() {
        console.log(this.viewModel);
    }
    onChange($event) {
        console.log(this.Editor.getData());
        // this.viewModel.contentLeft = this.Editor.getData();
    }
};
TextComponent = tslib_1.__decorate([
    Component({
        selector: 'app-text',
        templateUrl: './text.component.html',
        styleUrls: ['./text.component.scss']
    })
], TextComponent);
export { TextComponent };
//# sourceMappingURL=text.component.js.map