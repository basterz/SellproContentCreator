import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { animate, group, state, style, transition, trigger } from '@angular/animations';
import { EditorComponentViewModel } from './editor-component-view-model';
import { DOCUMENT } from '@angular/common';
let EditorComponent = class EditorComponent {
    constructor(componentFactoryResolver, pageScrollService, http, document) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.pageScrollService = pageScrollService;
        this.http = http;
        this.document = document;
        if (!this.http) {
            this.http = http;
        }
        this.viewModel = new EditorComponentViewModel();
    }
    ngOnInit() {
    }
    add(control) {
        this.viewModel.add(Object.create(control));
        this.pageScrollService.scroll({
            document: this.document,
            scrollTarget: '.bottomControls',
        });
    }
};
EditorComponent = tslib_1.__decorate([
    Component({
        selector: 'app-editor',
        templateUrl: './editor.component.html',
        styleUrls: ['./editor.component.scss'],
        animations: [
            trigger('openClose', [
                // ...
                state('open', style({
                    opacity: 1,
                })),
                state('closed', style({
                    opacity: 0,
                    height: '0px',
                })),
                transition('open => closed', [
                    animate('0.3s')
                ]),
                transition('closed => open', [
                    animate('0.3s')
                ]),
            ]),
            trigger('slideInOut', [
                transition(':enter', [
                    style({ transform: 'translateY(100%)' }),
                    animate('200ms ease-in', style({ transform: 'translateY(0%)' }))
                ]),
                transition(':leave', [
                    animate('200ms ease-out', style({ transform: 'translateY(100%)' }))
                ])
            ]),
            trigger('items', [
                transition(':leave', [
                    style({ transform: 'scale(1)', opacity: 1 }),
                    animate('600ms cubic-bezier(.8, -0.6, 0.2, 1)', style({
                        transform: 'scale(0.5)', opacity: 0,
                    }))
                ]),
                transition(':enter', [
                    style({ transform: 'scale(0.5)', opacity: 0 }),
                    group([
                        animate('600ms cubic-bezier(.8, -0.6, 0.2, 1)', style({ transform: 'scale(1)', opacity: 1 })),
                    ])
                ]),
            ]),
        ]
    }),
    tslib_1.__param(3, Inject(DOCUMENT))
], EditorComponent);
export { EditorComponent };
//# sourceMappingURL=editor.component.js.map