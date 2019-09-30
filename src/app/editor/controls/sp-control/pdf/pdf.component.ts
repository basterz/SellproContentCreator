import { Component, OnInit } from '@angular/core';
import {ControlComponent} from '../control.component';
import {PdfViewModel} from './pdf-view-model';
import {PdfSettingsComponent} from './pdf-settings/pdf-settings.component';
import {ControlLayer} from '../control-layer';
import {ImageViewModel} from '../image/image-view-model';

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

  DownloadFile(fileUrl: string) {
    console.log(fileUrl);
    window.open(fileUrl);
  }
}
