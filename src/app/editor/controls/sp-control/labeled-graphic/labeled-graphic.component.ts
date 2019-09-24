import {Component, OnInit} from '@angular/core';
import {ControlComponent} from '../control.component';
import {LabeledGraphicViewModel} from './labeled-graphic-view-model';
import {LabeledGraphicSettingsComponent} from './labeled-graphic-settings/labeled-graphic-settings.component';
import {ImageViewModel} from '../image/image-view-model';

@Component({
  selector: 'app-labeled-graphic',
  templateUrl: './labeled-graphic.component.html',
  styleUrls: ['./labeled-graphic.component.scss']
})
export class LabeledGraphicComponent extends ControlComponent implements OnInit {

  viewModel: LabeledGraphicViewModel;

  constructor() {
    super();
    this.viewModel = new LabeledGraphicViewModel();
  }


  ngOnInit() {
  }

}
