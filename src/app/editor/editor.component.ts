import {Component, ComponentFactoryResolver, Inject, OnInit, ViewChild} from '@angular/core';
import {animate, group, state, style, transition, trigger} from '@angular/animations';
import {EditorComponentViewModel} from './editor-component-view-model';
import {ControlComponent} from './controls/sp-control/control.component';
import {ControlViewModel} from './controls/sp-control/control-view-model';
import {PreviewComponent} from './controls/preview/preview.component';
import {SettingsComponent} from './controls/settings/settings.component';
import {IMenuItem} from './controls/sp-control/IMenuItem';
import {DOCUMENT} from '@angular/common';
import {PageScrollService} from 'ngx-page-scroll-core';
import {HttpClient} from '@angular/common/http';
import {ControlLayerType} from './controls/control-layer-type.enum';
import {MatDialog, MatSidenav} from '@angular/material';
import {LabeledGraphicSettingsDialogComponent} from './controls/dialogs/labeled-graphic-settings-dialog/labeled-graphic-settings-dialog.component';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {DynamicSettingsControlComponent} from './controls/dynamic-settings-control/dynamic-settings-control.component';
import {DeleteItemDialogComponent} from './controls/dialogs/delete-item-dialog/delete-item-dialog.component';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1,

      })),
      state('closed', style({
        opacity: 0,
        height: '0px',
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ]),
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({transform: 'translateY(100%)'}))
      ])
    ]),
    trigger('items', [
      transition(':leave', [
        style({transform: 'scale(1)', opacity: 1}),
        animate('600ms cubic-bezier(.8, -0.6, 0.2, 1)',
          style({
            transform: 'scale(0.5)', opacity: 0,
          }))
      ]),
      transition(':enter', [
        style({transform: 'scale(0.5)', opacity: 0}),  // initial
        group([
          animate('600ms cubic-bezier(.8, -0.6, 0.2, 1)', style({transform: 'scale(1)', opacity: 1})),
        ])
      ]),
    ]),
  ]
})
export class EditorComponent implements OnInit {
  static http: HttpClient;
  public viewModel: EditorComponentViewModel;
  public controlLayerType = ControlLayerType;

  @ViewChild('rightDrawer', {static: false}) rightDrawer: MatSidenav;
  @ViewChild('rightNav', {static: false}) rightNav: DynamicSettingsControlComponent;


  ngOnInit() {
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private pageScrollService: PageScrollService,
              private http: HttpClient,
              public dialog: MatDialog,
              @Inject(DOCUMENT) private document: any) {
    if (!this.http) {
      this.http = http;
    }
    this.viewModel = new EditorComponentViewModel();
  }

  add(control: IMenuItem<ControlComponent, SettingsComponent, PreviewComponent, ControlViewModel>) {
    this.viewModel.add(Object.create(control));

    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '.bottomControls',
    });
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer !== event.container) {
      event.item.data = Object.create(event.item.data);
      this.viewModel.selectedControls.splice(event.currentIndex, 0, event.item.data);
      this.viewModel.selectedControls.join();
    } else {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  select<Control extends ControlComponent,
    Settings extends SettingsComponent,
    Preview extends PreviewComponent,
    ViewModel extends ControlViewModel>(
    control: IMenuItem<ControlComponent, SettingsComponent, PreviewComponent, ControlViewModel>,
  ) {
    this.rightNav.menuItem = control;
    this.rightNav.loadComponent();
    if (!this.rightDrawer.opened) {
      this.rightDrawer.toggle();
    }
  }

  delete(control: IMenuItem<ControlComponent, SettingsComponent, PreviewComponent, ControlViewModel>) {
    // if (this.rightDrawer.opened) {
    //   this.rightDrawer.toggle();
    // }
    // this.rightNav.clear();
    // this.viewModel.delete(control);
    this.openDeleteDialog(control);
  }

  copy(control: IMenuItem<ControlComponent, SettingsComponent, PreviewComponent, ControlViewModel>) {
    this.viewModel.copy(control);
  }

  openSettingsDialog(control: IMenuItem<ControlComponent, SettingsComponent, PreviewComponent, ControlViewModel>) {
    console.log(control.viewModel);
    const dialogRef = this.dialog.open(LabeledGraphicSettingsDialogComponent, {
      width: '100%',
      height: '100%',
      maxWidth: '100vw',
      maxHeight: '100vh',
      data: control.viewModel
    });
  }
  openDeleteDialog(control: IMenuItem<ControlComponent, SettingsComponent, PreviewComponent, ControlViewModel>): void {
    const dialogRef = this.dialog.open(DeleteItemDialogComponent, {
      width: '250px',
      data: control
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result != null) {
        if (this.rightDrawer.opened) {
          this.rightDrawer.toggle();
        }
        this.rightNav.clear();
        this.viewModel.delete(control);
      }
    });
  }
}
