import {ControlLayerPosition} from '../control-layer-position.enum';
import {ControlLayerType} from '../control-layer-type.enum';
import {Point} from '@angular/cdk/typings/esm5/drag-drop/drag-ref';

export class ControlLayer {
  public position: ControlLayerPosition;
  public type: ControlLayerType;
  public x?: number;
  public y?: number;
 public title?: string;
  public content?: string;
  public file?: File;
  public fileUrl?: string;
  public uploaded?: boolean;
  public width?: number;
  public height?: number;
  public selected?: boolean;
  /*
  Generic Control Layer
   */
  constructor(type: ControlLayerType,
              position: ControlLayerPosition,
              x?: number,
              y?: number,
              title?: string,
              content?: string,
              file?: File,
              fileUrl?: string,
              uploaded?: boolean,
              width?: number,
              height?: number,
              selected?: boolean) {
    this.type = type;
    this.position = position;
    this.x = x;
    this.y = y;
    this.title = title;
    this.content = content;
    this.file = file;
    this.fileUrl = fileUrl;
    this.uploaded = uploaded;
    this.width = width;
    this.height = height;
  }
}

export class ControlLayerFactory {

  static Image(): ControlLayer {
    return new ControlLayer(ControlLayerType.IMAGE, ControlLayerPosition.RELATIVE);
  }

  static Pdf(): ControlLayer {
    return new ControlLayer(ControlLayerType.PDF, ControlLayerPosition.RELATIVE);
  }

  static LabeledGraphic(): ControlLayer {
    return new ControlLayer(ControlLayerType.LABELED_GRAPHIC, ControlLayerPosition.OVER);
  }

  static LabeledGraphicDot(x?: number, y?: number): ControlLayer {
    return new ControlLayer(ControlLayerType.LABELED_GRAPHIC_DOT, ControlLayerPosition.ABSOLUTE, x, y);
  }

  static Text(): ControlLayer {
    return new ControlLayer(ControlLayerType.TEXT, ControlLayerPosition.RELATIVE);
  }
}
