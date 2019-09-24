import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {ControlComponent} from '../sp-control/control.component';
import {ControlViewModel} from '../sp-control/control-view-model';
import {DynamicControlDirective} from '../../core/dynamic-control.directive';
import {Factory} from '../../core/Factory';
import {SettingsComponent} from '../settings/settings.component';
import {IMenuItem} from '../sp-control/IMenuItem';
import {PreviewComponent} from '../preview/preview.component';

@Component({
  selector: 'app-dynamic-settings-control',
  templateUrl: './dynamic-settings-control.component.html',
  styleUrls: ['./dynamic-settings-control.component.scss']
})
export class DynamicSettingsControlComponent implements OnInit {
  @Input() menuItem: IMenuItem<ControlComponent, SettingsComponent, PreviewComponent, ControlViewModel>;

  @ViewChild(DynamicControlDirective, {static: true}) componentHost: DynamicControlDirective;

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
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.menuItem.settingsControlType);
      const viewContainerRef = this.componentHost.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent(componentFactory);
      (componentRef.instance as SettingsComponent ).viewModel = this.menuItem.viewModel;
    }
  }

  public clear() {
    const viewContainerRef = this.componentHost.viewContainerRef;
    viewContainerRef.clear();
    this.menuItem = null;
  }
}
