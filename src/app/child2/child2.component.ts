import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private _name = '';

  @Input()
  set name(name: string) {
    // trim() 方法用于删除字符串的头尾空格
    this._name = (name && name.trim()) || '<no name set>';
  }

  get name(): string { return this._name; }
}
