import { PdfComponent } from '../../../controls/sp-control/pdf/pdf.component';
import { PdfSettingsComponent } from '../../../controls/settings/pdf-settings/pdf-settings.component';
import { PdfPreviewComponent } from '../../../controls/preview/pdf-preview/pdf-preview.component';
import { PdfViewModel } from '../../../controls/sp-control/pdf/pdf-view-model';
import { MenuItem } from './MenuItem';
import { ControlLayerType } from '../../../controls/control-layer-type.enum';
export class PdfItem extends MenuItem {
    constructor() {
        super();
        this.icon = '/assets/icons/pdf.png';
        this.name = 'Pdf Item';
        this.controlType = ControlLayerType.PDF;
        this.viewModel = new PdfViewModel();
    }
    get editorControlType() { return PdfComponent; }
    get previewControlType() { return PdfPreviewComponent; }
    get settingsControlType() { return PdfSettingsComponent; }
}
//# sourceMappingURL=PdfItem.js.map