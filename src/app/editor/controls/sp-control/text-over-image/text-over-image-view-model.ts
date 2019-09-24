import {ControlViewModel} from '../control-view-model';
import {ControlLayerFactory} from '../control-layer';
import {App} from '../../../../app';

export class TextOverImageViewModel extends ControlViewModel {
  icon: string;
  name: string;

  constructor() {
    super();
    this.name = 'Text Over Image';
    const imageLayer = ControlLayerFactory.Image();
    App.instance.http.get('assets/images/controls/image.png', {responseType: 'blob'}).subscribe(data => {
      const fileUrl = URL.createObjectURL(data);
      imageLayer.fileUrl = fileUrl;
    });

    const textLayer = ControlLayerFactory.Text();
    textLayer.content = '<h2>Title goes here</h2>';

    this.layers.push(imageLayer);
    this.layers.push(textLayer);

    this.mainLayer = imageLayer;
  }
}
