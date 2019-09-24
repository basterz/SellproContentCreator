import { Component, OnInit } from '@angular/core';
import {SettingsComponent} from '../../../settings/settings.component';
import {TextViewModel} from '../../text/text-view-model';
import {ColorEvent} from 'ngx-color';
import {MatSelectChange} from '@angular/material';
import {TextViewColumn} from '../../../text-view-column.enum';

@Component({
  selector: 'app-text-settings',
  templateUrl: './two-column-text-settings.component.html',
  styleUrls: ['./two-column-text-settings.component.scss']
})
export class TwoColumnTextSettingsComponent extends SettingsComponent implements OnInit {

  viewModel: TextViewModel;
  public TextViewColumn = TextViewColumn;
  constructor() {
    super();
  }

  ngOnInit() {
    console.log(this.viewModel);
  }
  OnTextViewChanged($event: MatSelectChange) {

  }
}

