import {ControlViewModel} from '../control-view-model';
import {ControlLayerFactory} from '../control-layer';

export class TextViewModel extends ControlViewModel {
  icon: string;
  name: string;

  constructor() {
    super();
    this.name = 'Text';
    const firstLayer = ControlLayerFactory.Text();
    firstLayer.content = '<h2>Title goes here</h2><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>';

    this.layers.push(firstLayer);
  }
}
