import { Component, OnInit } from '@angular/core';
import {SettingsComponent} from '../../../settings/settings.component';
import {PdfViewModel} from '../pdf-view-model';

@Component({
  selector: 'app-pdf-settings',
  templateUrl: './pdf-settings.component.html',
  styleUrls: ['./pdf-settings.component.scss']
})
export class PdfSettingsComponent extends  SettingsComponent implements OnInit {

  viewModel: PdfViewModel;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
