import {IMenuItem} from '../../../controls/sp-control/IMenuItem';
import {Type} from '@angular/core';
import {ImageComponent} from '../../../controls/sp-control/image/image.component';

import {ImageSettingsComponent} from '../../../controls/sp-control/image/image-settings/image-settings.component';
import {ImagePreviewComponent} from '../../../controls/sp-control/image/image-preview/image-preview.component';
import {MenuItem} from './MenuItem';
import {ControlLayerType} from '../../../controls/control-layer-type.enum';
import {ImageTextPreviewComponent} from '../../../controls/sp-control/image-text/image-text-preview/image-text-preview.component';
import {ImageTextViewModel} from '../../../controls/sp-control/image-text/image-text-view-model';
import {ImageTextComponent} from '../../../controls/sp-control/image-text/image-text.component';
import {ImageTextSettingsComponent} from '../../../controls/sp-control/image-text/image-text-settings/image-text-settings.component';

export class ImageTextItem extends MenuItem implements IMenuItem<ImageTextComponent, ImageTextSettingsComponent, ImageTextPreviewComponent, ImageTextViewModel> {
  icon = '/assets/icons/image-text.png';
  name = 'Image Item';

  controlType: ControlLayerType = ControlLayerType.IMAGE_TEXT;

  get editorControlType(): Type<ImageTextComponent> {
    return ImageTextComponent;
  }

  get previewControlType(): Type<ImageTextPreviewComponent> {
    return ImageTextPreviewComponent;
  }

  get settingsControlType(): Type<ImageTextSettingsComponent> {
    return ImageTextSettingsComponent;
  }

  viewModel: ImageTextViewModel;

  constructor() {
    super();
    this.viewModel = new ImageTextViewModel();
  }

  viewModelType: Type<ImageTextViewModel>;
}
