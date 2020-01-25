import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AboutUs, Menu} from '../../../shared/interface';
import {FetchDataService} from '../../../shared/services/fetch.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.less']
})
export class AboutUsComponent implements OnInit {

  aboutUs$: Observable<AboutUs[]>
  constructor(private menuServices: FetchDataService) { }

  ngOnInit() {
    this.aboutUs$ = this.menuServices.fetchAboutUs();
  }

}
