import { Component, OnInit, Input } from '@angular/core';
import { LayoutBarItem } from './layout-bar-item/layout-bar-item';

@Component({
  selector: 'layout-bar',
  templateUrl: './layout-bar.component.html',
  styleUrls: ['./layout-bar.component.css']
})
export class LayoutBarComponent implements OnInit {
  layoutBarItems: LayoutBarItem[];
  @Input() expanded: boolean;

  constructor() { }

  ngOnInit() {
    this.layoutBarItems = new Array();
    let lbi = new LayoutBarItem();
    lbi.title = "New Entry";
    lbi.route = "/entry";
    lbi.iconClass = "fa fa-user-plus fa-3x";
    this.layoutBarItems.push(lbi);
    lbi = new LayoutBarItem();
    lbi.title = "About";
    lbi.route = "/about";
    lbi.iconClass = "fa fa-info fa-3x";
    this.layoutBarItems.push(lbi);
  }

}
