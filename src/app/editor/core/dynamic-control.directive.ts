import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDynamicControl]'
})
export class DynamicControlDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
