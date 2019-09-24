import {IMenuItem} from '../../../controls/sp-control/IMenuItem';
import {Type} from '@angular/core';
import {ImageComponent} from '../../../controls/sp-control/image/image.component';

import {ImageSettingsComponent} from '../../../controls/sp-control/image/image-settings/image-settings.component';
import {ImagePreviewComponent} from '../../../controls/sp-control/image/image-preview/image-preview.component';
import {ImageViewModel} from '../../../controls/sp-control/image/image-view-model';
import {MenuItem} from './MenuItem';
import {ControlLayerType} from '../../../controls/control-layer-type.enum';

export class ImageItem extends MenuItem implements IMenuItem<ImageComponent, ImageSettingsComponent, ImagePreviewComponent, ImageViewModel> {
  icon = '/assets/icons/image.png';
  name = 'Image Item';

  controlType: ControlLayerType = ControlLayerType.IMAGE;

  get editorControlType(): Type<ImageComponent> {
    return ImageComponent;
  }

  get previewControlType(): Type<ImagePreviewComponent> {
    return ImagePreviewComponent;
  }

  get settingsControlType(): Type<ImageSettingsComponent> {
    return ImageSettingsComponent;
  }

  viewModel: ImageViewModel;

  constructor() {
    super();
    this.viewModel = new ImageViewModel();
  }

  viewModelType: Type<ImageViewModel>;
}
