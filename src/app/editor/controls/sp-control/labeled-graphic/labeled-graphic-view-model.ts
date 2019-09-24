import {ControlViewModel} from '../control-view-model';
import {ControlLayer, ControlLayerFactory} from '../control-layer';
import {App} from '../../../../app';


export class LabeledGraphicViewModel extends ControlViewModel {
  icon: string;
  name: string;
  private defaultDotTitle = 'Title';
  private defaultDotContent = 'Please enter labeled graphic text here ...';


  constructor(layers?: Array<ControlLayer>) {
    super();
    this.name = 'Labeled Graphic';
    console.log('labeled graphic created');

    if (!layers) {
      this.initialize();
    }
  }

  initialize() {
    const firstLayer = ControlLayerFactory.LabeledGraphic();
    const firstDot = ControlLayerFactory.LabeledGraphicDot();
    firstDot.x = 90;
    firstDot.y = 90;
    firstDot.title = this.defaultDotTitle + ' 1';
    firstDot.content = this.defaultDotContent;

    const secondDot = ControlLayerFactory.LabeledGraphicDot();
    secondDot.x = 10;
    secondDot.y = 30;
    secondDot.title = this.defaultDotTitle + ' 2';
    secondDot.content = this.defaultDotContent;

    App.instance.http.get('assets/images/controls/labeled-graphic.png', {responseType: 'blob'}).subscribe(data => {
      const fileUrl = URL.createObjectURL(data);
      firstLayer.fileUrl = fileUrl;
    });

    this.layers.push(firstLayer);
    this.layers.push(firstDot);
    this.layers.push(secondDot);
  }

  addPoint(x: number, y: number) {
    const dot = ControlLayerFactory.LabeledGraphicDot(x, y);
    dot.title = this.defaultDotTitle + ' ' + this.layers.length.toString();
    dot.content = this.defaultDotContent;
    this.selectPoint(dot);
    this.layers.push(dot);
  }

  selectPoint(layer: ControlLayer) {
    this.layers.forEach(p => p.selected = false);
    layer.selected = true;
    this.selectedLayer = layer;
  }

  resetSelected() {
    this.layers.forEach(p => p.selected = false);
  }

  remove(layer: ControlLayer) {
    const index = this.layers.indexOf(layer, 0);

    if (index > -1) {
      this.layers.splice(index, 1);
      console.log(index);

      console.log(this.layers);
    }
  }
}
