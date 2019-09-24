import {ControlComponent} from './controls/sp-control/control.component';
import {IMenuItem} from './controls/sp-control/IMenuItem';
import {ImageItem} from './sections/sidenav/items/ImageItem';
import {LabeledGraphicItem} from './sections/sidenav/items/LabeledGraphicItem';
import {PdfItem} from './sections/sidenav/items/PdfItem';
import {TextItem} from './sections/sidenav/items/TextItem';
import {ControlViewModel} from './controls/sp-control/control-view-model';
import {SettingsComponent} from './controls/settings/settings.component';
import {PreviewComponent} from './controls/preview/preview.component';
import * as _ from 'lodash';
import {ImageTextItem} from './sections/sidenav/items/ImageTextItem';
import {TextOverImageItem} from './sections/sidenav/items/TextOverImageItem';
import {TwoColumnTextItem} from './sections/sidenav/items/TwoColumnTextItem';

export class EditorComponentViewModel {
  public controls: Array<IMenuItem<ControlComponent, SettingsComponent, PreviewComponent, ControlViewModel>>;
  public selectedControls: Array<IMenuItem<ControlComponent, SettingsComponent, PreviewComponent, ControlViewModel>>;
  public selectedControl: IMenuItem<ControlComponent, SettingsComponent, PreviewComponent, ControlViewModel>;

  constructor() {
    this.controls = new Array<IMenuItem<ControlComponent, SettingsComponent, PreviewComponent, ControlViewModel>>();
    this.selectedControls = new Array<IMenuItem<ControlComponent, SettingsComponent, PreviewComponent, ControlViewModel>>();
    this.initControls();
  }

  private initControls() {
    this.controls.push(new ImageItem());
    this.controls.push(new ImageTextItem());
    this.controls.push(new TextOverImageItem());
    this.controls.push(new PdfItem());
    this.controls.push(new LabeledGraphicItem());
    this.controls.push(new TextItem());
    this.controls.push(new TwoColumnTextItem());
    this.selectedControls.push(new ImageItem());
    this.selectedControls.push(new ImageTextItem());
    this.selectedControls.push(new TextOverImageItem());
    // this.selectedControls.push(new LabeledGraphicItem());
    // this.selectedControls.push(new TextItem());
    // this.selectedControls.push(new ImageItem());
    // this.selectedControls.push(new ImageItem());
  }

  delete(control: IMenuItem<ControlComponent, SettingsComponent, PreviewComponent, ControlViewModel>) {
    const index = this.selectedControls.indexOf(control, 0);
    if (index > -1) {
      this.selectedControls.splice(index, 1);
    }
  }


  add(control: IMenuItem<ControlComponent, SettingsComponent, PreviewComponent, ControlViewModel>) {
    this.selectedControls.push(Object.create(control));
  }

  copy(control: IMenuItem<ControlComponent, SettingsComponent, PreviewComponent, ControlViewModel>) {
    const index = this.selectedControls.indexOf(control, 0);
    this.selectedControls.splice(index + 1, 0, _.cloneDeep(control));
  }
}
