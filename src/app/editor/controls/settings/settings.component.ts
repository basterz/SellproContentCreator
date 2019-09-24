import { Component, OnInit } from '@angular/core';
import {ColorEvent} from 'ngx-color';
import {ControlComponent} from '../sp-control/control.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public viewModel: any;

  constructor() { }

  ngOnInit() {
  }
  changeComplete($event: ColorEvent) {
    this.viewModel.background = $event.color.hex;
  }

}

