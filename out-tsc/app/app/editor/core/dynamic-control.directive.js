import * as tslib_1 from "tslib";
import { Directive } from '@angular/core';
let DynamicControlDirective = class DynamicControlDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
};
DynamicControlDirective = tslib_1.__decorate([
    Directive({
        selector: '[appDynamicControl]'
    })
], DynamicControlDirective);
export { DynamicControlDirective };
//# sourceMappingURL=dynamic-control.directive.js.map