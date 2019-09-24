import { ImageComponent } from '../../../controls/sp-control/image-control/image.component';
import { ImageSettingsComponent } from '../../../controls/settings/image-settings/image-settings.component';
import { ImagePreviewComponent } from '../../../controls/preview/image-preview/image-preview.component';
import { ImageViewModel } from '../../../controls/sp-control/image-control/image-view-model';
import { MenuItem } from './MenuItem';
import { ControlLayerType } from '../../../controls/control-layer-type.enum';
export class ImageItem extends MenuItem {
    constructor() {
        super();
        this.icon = '/assets/icons/image.png';
        this.name = 'Image Item';
        this.controlType = ControlLayerType.IMAGE;
        this.viewModel = new ImageViewModel();
    }
    get editorControlType() {
        return ImageComponent;
    }
    get previewControlType() {
        return ImagePreviewComponent;
    }
    get settingsControlType() {
        return ImageSettingsComponent;
    }
}
//# sourceMappingURL=ImageItem.js.map