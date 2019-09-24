import {Component, ComponentFactoryResolver, Input, OnInit, Type, ViewChild} from '@angular/core';
import {DynamicControlDirective} from '../../core/dynamic-control.directive';
import {ControlViewModel} from '../sp-control/control-view-model';
import {ControlComponent} from '../sp-control/control.component';

import {IMenuItem} from '../sp-control/IMenuItem';
import {SettingsComponent} from '../settings/settings.component';
import {PreviewComponent} from '../preview/preview.component';


@Component({
  selector: 'app-dynamic-control',
  templateUrl: './dynamic-control.component.html',
  styleUrls: ['./dynamic-control.component.scss']
})
export class DynamicControlComponent implements OnInit {

  @Input() menuItem?: IMenuItem<ControlComponent, SettingsComponent, PreviewComponent, ControlViewModel>;
  //  @Input() viewModel?: Type<ControlViewModel>;
  @ViewChild(DynamicControlDirective, {static: true}) adHost: DynamicControlDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.load();
  }

  public loadComponent() {
    this.load();
  }

  private load() {
    if (this.menuItem != null) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.menuItem.editorControlType);
      const viewContainerRef = this.adHost.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent(componentFactory);
      (componentRef.instance as ControlComponent ).viewModel = this.menuItem.viewModel;
    }
  }


}
