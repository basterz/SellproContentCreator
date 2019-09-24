import {Component, OnInit} from '@angular/core';
import {ComponentType} from './ComponentType';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit, ComponentType {

  data: string;
  id: number;
  name: string;

  constructor() { }

  ngOnInit() {
  }
}
