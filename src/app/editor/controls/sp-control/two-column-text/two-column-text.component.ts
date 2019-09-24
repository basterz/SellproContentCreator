import { Component, OnInit } from '@angular/core';
import {ControlComponent} from '../control.component';
import {TwoColumnTextViewModel} from './two-column-text-view-model';
import {ChangeEvent} from '@ckeditor/ckeditor5-angular';
@Component({
  selector: 'app-two-column-text',
  templateUrl: './two-column-text.component.html',
  styleUrls: ['./two-column-text.component.scss']
})
export class TwoColumnTextComponent extends ControlComponent implements OnInit {

  viewModel: TwoColumnTextViewModel;

  constructor() {
    super();
    console.log(this.viewModel);
  }

  ngOnInit() {

  }

  onChange($event: ChangeEvent) {
    console.log(this.Editor.getData());
  }
}
