import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Copy} from '../../shared/interface';
import {FetchDataService} from '../../shared/services/fetch.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  text$: Observable<Copy[]>
  constructor(private menuServices: FetchDataService) { }

  ngOnInit() {
    this.text$ = this.menuServices.fetchCopy();
  }
}
