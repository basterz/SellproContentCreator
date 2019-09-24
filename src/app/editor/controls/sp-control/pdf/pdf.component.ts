import { Component, OnInit } from '@angular/core';
import {ControlComponent} from '../control.component';
import {PdfViewModel} from './pdf-view-model';
import {PdfSettingsComponent} from './pdf-settings/pdf-settings.component';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent extends ControlComponent implements OnInit {
  viewModel: PdfViewModel;
  constructor() {
    super();


  }

  ngOnInit() {
  }

}
