import {ControlViewModel} from '../control-view-model';
import {ControlLayer, ControlLayerFactory} from '../control-layer';
import {App} from '../../../../app';

export class ImageViewModel extends ControlViewModel {
  icon: string;
  name: string;

  constructor(layers?: Array<ControlLayer>) {
    super();
    this.name = 'Image';
    if (!layers) {
      this.initialize();
    }
  }

  private initialize() {

    const imageLayer = ControlLayerFactory.Image();
    App.instance.http.get('assets/images/controls/image.png', {responseType: 'blob'}).subscribe(data => {
      const fileUrl = URL.createObjectURL(data);
      imageLayer.fileUrl = fileUrl;
    });
    this.layers.push(imageLayer);

    this.mainLayer = imageLayer;
  }
}
