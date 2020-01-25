import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Intro} from '../../shared/interface';
import {FetchDataService} from '../../shared/services/fetch.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.less']
})
export class IntroComponent implements OnInit {
  promoText$: Observable<Intro[]>
  constructor(private fetchDataService: FetchDataService) { }
  ngOnInit() {
    this.promoText$ = this.fetchDataService.fetchIntro();
  }
}
