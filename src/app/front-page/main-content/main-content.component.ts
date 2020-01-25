import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FetchDataService} from '../../shared/services/fetch.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.less']
})
export class MainContentComponent implements OnInit {
  tabs$: Observable<any>;
  constructor(private fetchDataService: FetchDataService) { }

  ngOnInit() {
   this.tabs$ = this.fetchDataService.fetchTab();
  }
}
