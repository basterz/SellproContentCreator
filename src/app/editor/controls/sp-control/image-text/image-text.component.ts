import {Component, OnInit} from '@angular/core';
import {ControlComponent} from '../control.component';
import {ImageTextViewModel} from './image-text-view-model';
import {ControlLayerPosition} from '../../control-layer-position.enum';
import {ControlLayer} from '../control-layer';

@Component({
  selector: 'app-image-text-control',
  templateUrl: './image-text.component.html',
  styleUrls: ['./image-text.component.scss']
})
export class ImageTextComponent extends ControlComponent implements OnInit {
  viewModel: ImageTextViewModel;
  private _fxLayout: string;

  constructor() {
    super();
    this.viewModel = new ImageTextViewModel();
  }

  ngOnInit() {
  }

  set fxLayout(value: string) {
    this._fxLayout = value;
  }
  get fxLayout(): string {
    switch (this.viewModel.mainLayer.position) {
      case ControlLayerPosition.LEFT: {
        this._fxLayout = 'row';
        break;
      }
      case ControlLayerPosition.RIGHT: {
        this._fxLayout = 'row-reverse';
        break;
      }
      default: {
        this._fxLayout = 'row';
        break;
      }
    }

    return this._fxLayout;
  }

  onFileSelected(files: FileList, layer: ControlLayer) {
    if (files != null) {
      layer.fileUrl = URL.createObjectURL(files[0]);;
    }
  }
}
