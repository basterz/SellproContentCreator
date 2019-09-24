import { LabeledGraphicComponent } from '../../../controls/sp-control/labeled-graphic/labeled-graphic.component';
import { LabeledGraphicSettingsComponent } from '../../../controls/settings/labeled-graphic-settings/labeled-graphic-settings.component';
import { LabeledGraphicPreviewComponent } from '../../../controls/preview/labeled-graphic-preview/labeled-graphic-preview.component';
import { LabeledGraphicViewModel } from '../../../controls/sp-control/labeled-graphic/labeled-graphic-view-model';
import { MenuItem } from './MenuItem';
import { ControlLayerType } from '../../../controls/control-layer-type.enum';
export class LabeledGraphicItem extends MenuItem {
    constructor() {
        super();
        this.icon = '/assets/icons/labeled.png';
        this.name = 'Labeled Graphic item';
        this.controlType = ControlLayerType.LABELED_GRAPHIC;
        this.viewModel = new LabeledGraphicViewModel();
    }
    get editorControlType() { return LabeledGraphicComponent; }
    get previewControlType() { return LabeledGraphicPreviewComponent; }
    get settingsControlType() { return LabeledGraphicSettingsComponent; }
}
//# sourceMappingURL=LabeledGraphicItem.js.map