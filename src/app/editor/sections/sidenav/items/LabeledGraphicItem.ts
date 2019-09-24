import {IMenuItem} from '../../../controls/sp-control/IMenuItem';
import {LabeledGraphicComponent} from '../../../controls/sp-control/labeled-graphic/labeled-graphic.component';
import {LabeledGraphicSettingsComponent} from '../../../controls/sp-control/labeled-graphic/labeled-graphic-settings/labeled-graphic-settings.component';
import {LabeledGraphicPreviewComponent} from '../../../controls/sp-control/labeled-graphic/labeled-graphic-preview/labeled-graphic-preview.component';
import {LabeledGraphicViewModel} from '../../../controls/sp-control/labeled-graphic/labeled-graphic-view-model';
import {Type} from '@angular/core';
import {MenuItem} from './MenuItem';
import {ImageViewModel} from '../../../controls/sp-control/image/image-view-model';
import {ControlLayerType} from '../../../controls/control-layer-type.enum';
import {HttpClient} from '@angular/common/http';


export class LabeledGraphicItem extends MenuItem
  implements IMenuItem<LabeledGraphicComponent, LabeledGraphicSettingsComponent, LabeledGraphicPreviewComponent, LabeledGraphicViewModel> {

  icon = '/assets/icons/labeled.png';
  name = 'Labeled Graphic item';
  controlType: ControlLayerType = ControlLayerType.LABELED_GRAPHIC;
  get editorControlType(): Type<LabeledGraphicComponent> { return LabeledGraphicComponent; }
  get previewControlType(): Type<LabeledGraphicPreviewComponent> { return LabeledGraphicPreviewComponent; }
  get settingsControlType(): Type<LabeledGraphicSettingsComponent> { return LabeledGraphicSettingsComponent; }
  viewModel: LabeledGraphicViewModel;

  constructor() {
    super();
    this.viewModel = new LabeledGraphicViewModel();
  }

  viewModelType: Type<LabeledGraphicViewModel>;
}
