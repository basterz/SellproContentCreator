import {IMenuItem} from '../../../controls/sp-control/IMenuItem';
import {Type} from '@angular/core';
import {TextComponent} from '../../../controls/sp-control/text/text.component';
import {TextPreviewComponent} from '../../../controls/sp-control/text/text-preview/text-preview.component';
import {TextViewModel} from '../../../controls/sp-control/text/text-view-model';
import {MenuItem} from './MenuItem';
import {ControlLayerType} from '../../../controls/control-layer-type.enum';
import {TwoColumnTextSettingsComponent} from '../../../controls/sp-control/two-column-text/two-column-text-settings/two-column-text-settings.component';
import {TwoColumnTextComponent} from '../../../controls/sp-control/two-column-text/two-column-text.component';
import {TwoColumnTextPreviewComponent} from '../../../controls/sp-control/two-column-text/two-column-text-preview/two-column-text-preview.component';
import {TwoColumnTextViewModel} from '../../../controls/sp-control/two-column-text/two-column-text-view-model';

export class TwoColumnTextItem extends MenuItem implements IMenuItem<TwoColumnTextComponent, TwoColumnTextSettingsComponent, TwoColumnTextPreviewComponent, TwoColumnTextViewModel> {
  icon = '/assets/icons/two-column-text.png';
  name = 'Two Column Text Item';

  controlType: ControlLayerType = ControlLayerType.TWO_COLUMN_TEXT;
  get editorControlType(): Type<TwoColumnTextComponent> { return TextComponent; }
  get previewControlType(): Type<TwoColumnTextPreviewComponent> { return TwoColumnTextPreviewComponent; }
  get settingsControlType(): Type<TwoColumnTextSettingsComponent> { return TwoColumnTextSettingsComponent; }
  viewModel: TwoColumnTextViewModel;

  constructor() {
    super();
    this.viewModel = new TwoColumnTextViewModel();
    console.log(1);
  }

  viewModelType: Type<TwoColumnTextViewModel>;
}
