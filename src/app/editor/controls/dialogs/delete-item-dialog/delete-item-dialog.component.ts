import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {LabeledGraphicViewModel} from '../../sp-control/labeled-graphic/labeled-graphic-view-model';
import {IMenuItem} from '../../sp-control/IMenuItem';
import {ControlComponent} from '../../sp-control/control.component';
import {SettingsComponent} from '../../settings/settings.component';
import {PreviewComponent} from '../../preview/preview.component';
import {ControlViewModel} from '../../sp-control/control-view-model';

@Component({
  selector: 'app-delete-item-dialog',
  templateUrl: './delete-item-dialog.component.html',
  styleUrls: ['./delete-item-dialog.component.scss']
})
export class DeleteItemDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteItemDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IMenuItem<ControlComponent, SettingsComponent, PreviewComponent, ControlViewModel>) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
