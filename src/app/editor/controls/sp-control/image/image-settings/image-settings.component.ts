import {Component, OnInit} from '@angular/core';
import {SettingsComponent} from '../../../settings/settings.component';
import {ImageViewModel} from '../image-view-model';
import {MatSelectChange} from '@angular/material';
import {ControlLayerType} from '../../../control-layer-type.enum';
import {ControlLayerPosition} from '../../../control-layer-position.enum';

@Component({
  selector: 'app-image-settings',
  templateUrl: './image-settings.component.html',
  styleUrls: ['./image-settings.component.scss']
})
export class ImageSettingsComponent extends SettingsComponent implements OnInit {

  viewModel: ImageViewModel;
  public ControlLayerPosition = ControlLayerPosition;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  ImagePositionChanged($event: MatSelectChange) {
    switch ($event.value) {
      case ControlLayerPosition.LEFT: {
        this.viewModel.layers.find(p => p.type === ControlLayerType.IMAGE).position = ControlLayerPosition.LEFT;
        this.viewModel.layers.find(p => p.type === ControlLayerType.TEXT).position = ControlLayerPosition.RIGHT;
        break;
      }
      case ControlLayerPosition.RIGHT: {
        this.viewModel.layers.find(p => p.type === ControlLayerType.IMAGE).position = ControlLayerPosition.RIGHT;
        this.viewModel.layers.find(p => p.type === ControlLayerType.TEXT).position = ControlLayerPosition.LEFT;
        break;
      }
      case ControlLayerPosition.OVER: {
        this.viewModel.layers.find(p => p.type === ControlLayerType.IMAGE).position = ControlLayerPosition.RELATIVE;
        this.viewModel.layers.find(p => p.type === ControlLayerType.TEXT).position = ControlLayerPosition.ABSOLUTE;
        break;
      }
    }
  }
}
