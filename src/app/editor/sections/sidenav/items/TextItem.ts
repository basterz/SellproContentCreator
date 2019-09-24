import {IMenuItem} from '../../../controls/sp-control/IMenuItem';
import {Type} from '@angular/core';
import {TextComponent} from '../../../controls/sp-control/text/text.component';
import {TextPreviewComponent} from '../../../controls/sp-control/text/text-preview/text-preview.component';
import {TextViewModel} from '../../../controls/sp-control/text/text-view-model';
import {MenuItem} from './MenuItem';
import {ControlLayerType} from '../../../controls/control-layer-type.enum';
import {TwoColumnTextSettingsComponent} from '../../../controls/sp-control/two-column-text/two-column-text-settings/two-column-text-settings.component';

export class TextItem extends MenuItem implements IMenuItem<TextComponent, TwoColumnTextSettingsComponent, TextPreviewComponent, TextViewModel> {
  icon = '/assets/icons/text.png';
  name = 'Text Item';

  controlType: ControlLayerType = ControlLayerType.TEXT;
  get editorControlType(): Type<TextComponent> { return TextComponent; }
  get previewControlType(): Type<TextPreviewComponent> { return TextPreviewComponent; }
  get settingsControlType(): Type<TwoColumnTextSettingsComponent> { return TwoColumnTextSettingsComponent; }
  viewModel: TextViewModel;

  constructor() {
    super();
    this.viewModel = new TextViewModel();
    console.log(1);
  }

  viewModelType: Type<TextViewModel>;
}
