import { moveItemInArray } from '@angular/cdk/drag-drop';
import { ImageItem } from './sections/sidenav/items/ImageItem';
import { LabeledGraphicItem } from './sections/sidenav/items/LabeledGraphicItem';
import { PdfItem } from './sections/sidenav/items/PdfItem';
import { TextItem } from './sections/sidenav/items/TextItem';
export class EditorComponentViewModel {
    constructor() {
        this.controls = new Array();
        this.selectedControls = new Array();
        this.initControls();
    }
    initControls() {
        this.controls.push(new ImageItem());
        this.controls.push(new PdfItem());
        this.controls.push(new LabeledGraphicItem());
        this.controls.push(new TextItem());
        this.selectedControls.push(new TextItem());
    }
    drop(event) {
        if (event.previousContainer !== event.container) {
            event.item.data = Object.create(event.item.data);
            this.selectedControls.splice(event.currentIndex, 0, event.item.data);
            this.selectedControls.join();
        }
        else {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    select(control, drawer, rightNav) {
        rightNav.menuItem = control;
        rightNav.loadComponent();
        if (!drawer.opened) {
            drawer.toggle();
        }
    }
    delete(control, rightDrawer, rightNav) {
        if (rightDrawer.opened) {
            rightDrawer.toggle();
        }
        rightNav.clear();
        console.log(control);
        const index = this.selectedControls.indexOf(control, 0);
        console.log(index);
        if (index > -1) {
            this.selectedControls.splice(index, 1);
        }
    }
    copy(control) {
        const index = this.selectedControls.indexOf(control, 0);
        const newControl = Object.create(control);
        newControl.viewModel = Object.assign({}, control.viewModel);
        const spliced = this.selectedControls.splice(index + 1, 0, newControl);
    }
    add(control) {
        this.selectedControls.push(Object.create(control));
    }
}
//# sourceMappingURL=editor-component-view-model.js.map