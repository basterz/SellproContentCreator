import {Component, OnInit} from '@angular/core';
import * as CkEditor from 'ckeditor5-build-balloon-basterz-build';
import {ControlLayerPosition} from '../control-layer-position.enum';
import {ControlLayerType} from '../control-layer-type.enum';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  public viewModel: any;
  public Editor = CkEditor;
  editorConfig = {
    placeholder: 'Type the content here!',
  };
  public ControlLayerType = ControlLayerType;
  public ControlLayerPosition = ControlLayerPosition;

  constructor() {}

  ngOnInit() {
  }
}
