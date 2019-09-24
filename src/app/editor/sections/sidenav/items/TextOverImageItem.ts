import {IMenuItem} from '../../../controls/sp-control/IMenuItem';
import {Type} from '@angular/core';
import {TextComponent} from '../../../controls/sp-control/text/text.component';
import {MenuItem} from './MenuItem';
import {ControlLayerType} from '../../../controls/control-layer-type.enum';
import {TextOverImageComponent} from '../../../controls/sp-control/text-over-image/text-over-image.component';
import {TextOverImageSettingsComponent} from '../../../controls/sp-control/text-over-image/text-over-image-settings/text-over-image-settings.component';
import {TextOverImagePreviewComponent} from '../../../controls/sp-control/text-over-image/text-over-image-preview/text-over-image-preview.component';
import {TextOverImageViewModel} from '../../../controls/sp-control/text-over-image/text-over-image-view-model';

export class TextOverImageItem extends MenuItem implements IMenuItem<TextOverImageComponent, TextOverImageSettingsComponent, TextOverImagePreviewComponent, TextOverImageViewModel> {
  icon = '/assets/icons/text-over-image.png';
  name = 'Text Over Image Item';

  controlType: ControlLayerType = ControlLayerType.TEXT_OVER_IMAGE;
  get editorControlType(): Type<TextOverImageComponent> { return TextOverImageComponent; }
  get previewControlType(): Type<TextOverImagePreviewComponent> { return TextOverImagePreviewComponent; }
  get settingsControlType(): Type<TextOverImageSettingsComponent> { return TextOverImageSettingsComponent; }
  viewModel: TextOverImageViewModel;

  constructor() {
    super();
    this.viewModel = new TextOverImageViewModel();
  }

  viewModelType: Type<TextOverImageViewModel>;
}
