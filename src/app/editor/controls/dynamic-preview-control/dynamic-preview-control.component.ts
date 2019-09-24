import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {DynamicControlDirective} from '../../core/dynamic-control.directive';
import {IMenuItem} from '../sp-control/IMenuItem';
import {ControlComponent} from '../sp-control/control.component';
import {SettingsComponent} from '../settings/settings.component';
import {PreviewComponent} from '../preview/preview.component';
import {ControlViewModel} from '../sp-control/control-view-model';

@Component({
  selector: 'app-dynamic-preview-control',
  templateUrl: './dynamic-preview-control.component.html',
  styleUrls: ['./dynamic-preview-control.component.scss']
})
export class DynamicPreviewControlComponent implements OnInit {

  @ViewChild(DynamicControlDirective, {static: true}) componentHost: DynamicControlDirective;
  @Input() menuItem: IMenuItem<ControlComponent, SettingsComponent, PreviewComponent, ControlViewModel>;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.load();
  }

  public loadComponent() {
    this.load();
  }

  private load() {

    if (this.menuItem != null) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.menuItem.previewControlType);
      const viewContainerRef = this.componentHost.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent(componentFactory);

      // (componentRef.instance as ControlComponent).viewModel = this.editorComponent.viewModel;

    }
  }

}
