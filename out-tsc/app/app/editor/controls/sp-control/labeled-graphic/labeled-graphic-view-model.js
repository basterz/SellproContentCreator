import { ControlViewModel } from '../control-view-model';
import { ControlLayerFactory } from '../control-layer';
import { App } from '../../../../app';
export class LabeledGraphicViewModel extends ControlViewModel {
    constructor() {
        super();
        this.name = 'Labeled Graphic';
        console.log('labeled graphic created');
        const firstLayer = ControlLayerFactory.LabeledGraphic();
        App.instance.http.get('assets/images/controls/labeled-graphic.png', { responseType: 'blob' }).subscribe(data => {
            const fileUrl = URL.createObjectURL(data);
            firstLayer.fileUrl = fileUrl;
            console.log(this.layers);
        });
        this.layers.push(firstLayer);
    }
}
//# sourceMappingURL=labeled-graphic-view-model.js.map