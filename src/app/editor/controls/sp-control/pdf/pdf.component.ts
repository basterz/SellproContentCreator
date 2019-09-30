import { Component, OnInit } from '@angular/core';
import {ControlComponent} from '../control.component';
import {PdfViewModel} from './pdf-view-model';
import {ControlLayer} from '../control-layer';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})

export class PdfComponent extends ControlComponent implements OnInit {
  viewModel: PdfViewModel;
  constructor() {
    super();
    this.viewModel = new PdfViewModel();
  }

  ngOnInit() {
  }

  onFileSelected(files: FileList, layer: ControlLayer) {
    if (files != null) {
      layer.fileUrl = URL.createObjectURL(files[0]);
    }
  }
}
