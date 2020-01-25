import { Component, OnInit } from '@angular/core';
import {FetchDataService} from '../../../shared/services/fetch.service';
import {Observable} from 'rxjs';
import {Menu} from '../../../shared/interface';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.less']
})
export class MenuTopComponent implements OnInit {
  links$: Observable<Menu[]>
  constructor(private menuServices: FetchDataService) { }

  ngOnInit() {
    this.links$ = this.menuServices.fetch();
  }

}
