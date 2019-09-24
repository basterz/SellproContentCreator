import {Component, OnInit} from '@angular/core';
import {ControlComponent} from '../control.component';
import {ImageViewModel} from './image-view-model';
import {ControlLayerPosition} from '../../control-layer-position.enum';
import {ControlLayer} from '../control-layer';

@Component({
  selector: 'app-image-control',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent extends ControlComponent implements OnInit {
  viewModel: ImageViewModel;

  constructor() {
    super();
    this.viewModel = new ImageViewModel();
  }

  ngOnInit() {
  }


  onFileSelected(files: FileList, layer: ControlLayer) {
    if (files != null) {
      layer.fileUrl = URL.createObjectURL(files[0]);;
    }
  }
}
