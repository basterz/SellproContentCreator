import { ControlLayerPosition } from '../control-layer-position.enum';
import { ControlLayerType } from '../control-layer-type.enum';
export class ControlLayer {
    /*
    Generic Control Layer
     */
    constructor(type, position, positionPoint, content, file, fileUrl, uploaded) {
        this.type = type;
        this.position = position;
        this.positionPoint = positionPoint;
        this.content = content;
        this.file = file;
        this.fileUrl = fileUrl;
        this.uploaded = uploaded;
    }
}
export class ControlLayerFactory {
    static Image() {
        return new ControlLayer(ControlLayerType.IMAGE, ControlLayerPosition.RELATIVE);
    }
    static Pdf() {
        return new ControlLayer(ControlLayerType.PDF, ControlLayerPosition.RELATIVE);
    }
    static LabeledGraphic() {
        return new ControlLayer(ControlLayerType.LABELED_GRAPHIC, ControlLayerPosition.OVER);
    }
    static LabeledGraphicDot() {
        return new ControlLayer(ControlLayerType.LABELED_GRAPHIC_DOT, ControlLayerPosition.ABSOLUTE);
    }
    static Text() {
        return new ControlLayer(ControlLayerType.TEXT, ControlLayerPosition.RELATIVE);
    }
}
//# sourceMappingURL=control-layer.js.map