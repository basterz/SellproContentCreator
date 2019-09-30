import {ControlViewModel} from '../control-view-model';
import {ControlLayerFactory} from '../control-layer';

export class PdfViewModel extends ControlViewModel {
  icon: string;
  name: string;

  constructor() {
    super();
    this.name = 'Pdf';
    this.background = '#E9E9E9';
    const layer = ControlLayerFactory.Pdf();
    this.layers.push(layer);
  }
}
