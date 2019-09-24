import {ControlViewModel} from '../control-view-model';
import {ControlLayer, ControlLayerFactory} from '../control-layer';
import {App} from '../../../../app';
import {ControlLayerPosition} from '../../control-layer-position.enum';

export class ImageTextViewModel extends ControlViewModel {
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
    this.selectedPosition = ControlLayerPosition.LEFT;

    const imageLayer = ControlLayerFactory.Image();
    App.instance.http.get('assets/images/controls/image.png', {responseType: 'blob'}).subscribe(data => {
      const fileUrl = URL.createObjectURL(data);
      imageLayer.fileUrl = fileUrl;
    });

    const textLayer = ControlLayerFactory.Text();
    textLayer.content = '<h2>Title goes here</h2><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>';

    this.layers.push(imageLayer);
    this.layers.push(textLayer);

    this.mainLayer = imageLayer;
  }
}
