import {ControlComponent} from './control.component';
import {Type} from '@angular/core';
import {SettingsComponent} from '../settings/settings.component';
import {PreviewComponent} from '../preview/preview.component';
import {ControlViewModel} from './control-view-model';
import {ControlLayerType} from '../control-layer-type.enum';

export interface IMenuItem<

  Control extends ControlComponent,
  Settings extends SettingsComponent,
  Preview extends PreviewComponent,
  ViewModel extends ControlViewModel> {

  name: string;
  icon: string;
  controlType: ControlLayerType;
  hover: boolean;

  editorControlType: Type<Control>;
  settingsControlType: Type<Settings>;
  previewControlType: Type<Preview>;
  viewModelType: Type<ViewModel>;
  viewModel: ViewModel;
}
