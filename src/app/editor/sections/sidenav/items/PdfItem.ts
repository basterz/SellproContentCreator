import {IMenuItem} from '../../../controls/sp-control/IMenuItem';
import {Type} from '@angular/core';
import {PdfComponent} from '../../../controls/sp-control/pdf/pdf.component';
import {PdfSettingsComponent} from '../../../controls/sp-control/pdf/pdf-settings/pdf-settings.component';
import {PdfPreviewComponent} from '../../../controls/sp-control/pdf/pdf-preview/pdf-preview.component';
import {PdfViewModel} from '../../../controls/sp-control/pdf/pdf-view-model';
import {MenuItem} from './MenuItem';
import {ControlLayerType} from '../../../controls/control-layer-type.enum';

export class PdfItem extends MenuItem implements IMenuItem<PdfComponent, PdfSettingsComponent, PdfPreviewComponent, PdfViewModel> {
  icon = '/assets/icons/pdf.png';
  name = 'Pdf Item';

  controlType: ControlLayerType = ControlLayerType.PDF;
  get editorControlType(): Type<PdfComponent> { return PdfComponent; }
  get previewControlType(): Type<PdfPreviewComponent> { return PdfPreviewComponent; }
  get settingsControlType(): Type<PdfSettingsComponent> { return PdfSettingsComponent; }
  viewModel: PdfViewModel;

  constructor() {
    super();
    this.viewModel = new PdfViewModel();
  }

  viewModelType: Type<PdfViewModel>;

}
