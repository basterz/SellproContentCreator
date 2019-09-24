import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditorComponent } from './editor.component';
const routes = [
    { path: '', component: EditorComponent },
];
let EditorRoutingModule = class EditorRoutingModule {
};
EditorRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], EditorRoutingModule);
export { EditorRoutingModule };
//# sourceMappingURL=editor-routing.module.js.map