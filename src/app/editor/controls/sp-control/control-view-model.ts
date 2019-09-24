import {ControlLayer} from './control-layer';
import {ControlLayerType} from '../control-layer-type.enum';
import {ControlLayerPosition} from '../control-layer-position.enum';
import {TextViewColumn} from '../text-view-column.enum';

export abstract class ControlViewModel {

  public abstract name: string;
  public abstract icon: string;
  public spaceTop: number;
  public spaceBottom: number;
  public spaceLeft: number;
  public spaceRight: number;
  public background: string;

  public layers: Array<ControlLayer>;
  public mainLayer?: ControlLayer;
  public selectedLayer?: ControlLayer;
  public selectedPosition?: ControlLayerPosition;
  public textView?: TextViewColumn;

  protected constructor() {
    this.spaceTop = 10;
    this.spaceLeft = 10;
    this.spaceBottom = 10;
    this.spaceRight = 10;
    this.layers = new Array<ControlLayer>();
  }
}
