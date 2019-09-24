import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { App } from './app';
let AppComponent = class AppComponent {
    constructor(http) {
        this.http = http;
        this.title = 'app';
        App.init(http);
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map