import { Component, OnInit } from '@angular/core';
import {ControlComponent} from '../control.component';
import {TextViewModel} from './text-view-model';
import {ChangeEvent} from '@ckeditor/ckeditor5-angular';
@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent extends ControlComponent implements OnInit {

  viewModel: TextViewModel;

  constructor() {
    super();
    console.log(this.viewModel);
  }

  ngOnInit() {

  }

  onChange($event: ChangeEvent) {
    console.log(this.Editor.getData());
    // this.viewModel.contentLeft = this.Editor.getData();

  }
}
