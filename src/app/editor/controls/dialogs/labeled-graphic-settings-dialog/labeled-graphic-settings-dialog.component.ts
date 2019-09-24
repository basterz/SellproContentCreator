import {Component, ElementRef, Inject, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ControlLayer} from '../../sp-control/control-layer';
import {LabeledGraphicViewModel} from '../../sp-control/labeled-graphic/labeled-graphic-view-model';
import {CdkDragDrop, CdkDragEnd} from '@angular/cdk/drag-drop';
import {NgInputFileComponent} from 'ng-input-file';
import {ControlLayerType} from '../../control-layer-type.enum';

@Component({
  selector: 'app-labeled-graphic-settings-dialog',
  templateUrl: './labeled-graphic-settings-dialog.component.html',
  styleUrls: ['./labeled-graphic-settings-dialog.component.scss']
})
export class LabeledGraphicSettingsDialogComponent {

  @ViewChild('container', { static: false}) container: ElementRef;
  @ViewChild('input1', { static: false}) private input1: NgInputFileComponent;
  public ControlLayerType = ControlLayerType;

  constructor(
    public dialogRef: MatDialogRef<LabeledGraphicSettingsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LabeledGraphicViewModel) {
    this.data.resetSelected();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onPointAdd($event) {

    const containerWidth = this.container.nativeElement.clientWidth;
    const containerHeight = this.container.nativeElement.clientHeight;
    const offsetX = $event.offsetX;
    const offsetY = $event.offsetY;
    const percentX: number = (offsetX / containerWidth) * 100;
    const percentY: number = (offsetY / containerHeight) * 100;
    const x = Math.min(Math.max(percentX, 2), 98);
    const y = Math.min(Math.max(percentY, 2), 98);
    console.log(x);
    console.log(y);
    this.data.addPoint(x, y);
  }

  onDotClick(layer: ControlLayer, $event: MouseEvent) {
    $event.stopPropagation();
    $event.preventDefault();

    this.data.selectPoint(layer);
    return false;
  }

  onDragStart(layer: ControlLayer) {
    this.data.selectPoint(layer);
  }

  onDragEnd(layer: ControlLayer, $event) {

    const containerWidth = this.container.nativeElement.clientWidth;
    const containerHeight = this.container.nativeElement.clientHeight;
    const offsetX = $event.distance.x;
    const offsetY = $event.distance.y;

    const percentX: number = (offsetX / containerWidth) * 100;
    const percentY: number = (offsetY / containerHeight) * 100;
    const x = Math.min(Math.max(layer.x + percentX, 2), 98);
    const y = Math.min(Math.max(layer.y + percentY, 3), 97);
    $event.source._dragRef.reset();
    layer.x = x;
    layer.y = y;
    return false;
  }

  delete(layer: ControlLayer) {
    this.data.remove(layer);

  }

  dotPanelOpen(layer: ControlLayer) {
    this.data.selectPoint(layer);
  }

  fileChanged({ files }) {
    const fileUrl = URL.createObjectURL(files[0]);
    this.data.layers[0].fileUrl = fileUrl;
  }

  dotPanelClosed(layer: ControlLayer) {
    // this.data.resetSelected();
  }
}
