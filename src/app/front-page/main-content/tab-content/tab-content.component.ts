import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.less']
})
export class TabContentComponent implements OnInit {
  @Input() item: any;
  constructor() { }

  ngOnInit() {

  }

}
