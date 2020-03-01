import { Component, OnInit } from '@angular/core';
import {data} from './data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  table$ = data;
  cellVal: number;
  arr = [];
  checkedBox: any;
  constructor() { }

  ngOnInit() {
    this.timeline();
  }
  timeline() {
    const item = document.querySelectorAll('.line');
    item.forEach(( item, index) => {

      if (index === index) {
        item.style.width = this.cellVal * 50 + 'px';
      }
    });
    console.log(this.cellVal);
  }
  openLine() {
    this.timeline();
  }
  change() {

  }
  checkBox(checked,data) {
      console.log(checked);
      if (!data.checked) {
       data.rate.forEach(item => {
         item.value = '--';
       });
     }
  }
  copyValue(e, item) {
      console.log(e.current.target.value);
  }
}
