import { Component, OnInit } from '@angular/core';
import {ControlComponent} from '../control.component';
import {TextOverImageViewModel} from './text-over-image-view-model';
import {ChangeEvent} from '@ckeditor/ckeditor5-angular';
import {ControlLayer} from '../control-layer';
@Component({
  selector: 'app-text-over-image',
  templateUrl: './text-over-image.component.html',
  styleUrls: ['./text-over-image.component.scss']
})

export class TextOverImageComponent extends ControlComponent implements OnInit {

  viewModel: TextOverImageViewModel;

  constructor() {
    super();
    console.log(this.viewModel);
  }

  ngOnInit() {

  }

  onFileSelected(files: FileList, layer: ControlLayer) {
    if (files != null) {
      layer.fileUrl = URL.createObjectURL(files[0]);
    }
  }
}
