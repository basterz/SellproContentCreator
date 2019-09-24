import { TextComponent } from '../../../controls/sp-control/text/text.component';
import { TextSettingsComponent } from '../../../controls/settings/text-settings/text-settings.component';
import { TextPreviewComponent } from '../../../controls/preview/text-preview/text-preview.component';
import { TextViewModel } from '../../../controls/sp-control/text/text-view-model';
import { MenuItem } from './MenuItem';
import { ControlLayerType } from '../../../controls/control-layer-type.enum';
export class TextItem extends MenuItem {
    constructor() {
        super();
        this.icon = '/assets/icons/text.png';
        this.name = 'Text Item';
        this.controlType = ControlLayerType.TEXT;
        this.viewModel = new TextViewModel();
        console.log(1);
    }
    get editorControlType() { return TextComponent; }
    get previewControlType() { return TextPreviewComponent; }
    get settingsControlType() { return TextSettingsComponent; }
}
//# sourceMappingURL=TextItem.js.map