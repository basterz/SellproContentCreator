import { Component, OnInit } from '@angular/core';
import {SettingsComponent} from '../../../settings/settings.component';
import {LabeledGraphicViewModel} from '../labeled-graphic-view-model';

@Component({
  selector: 'app-labeled-graphic-settings',
  templateUrl: './labeled-graphic-settings.component.html',
  styleUrls: ['./labeled-graphic-settings.component.scss']
})
export class LabeledGraphicSettingsComponent extends SettingsComponent implements OnInit {

  viewModel: LabeledGraphicViewModel;
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
