import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Menu} from '../../../shared/interface';
import {FetchDataService} from '../../../shared/services/fetch.service';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.less']
})
export class FooterMenuComponent implements OnInit {
  links$: Observable<Menu[]>
  constructor(private menuServices: FetchDataService) { }

  ngOnInit() {
    this.links$ = this.menuServices.fetchMenuFooter();
  }
}
