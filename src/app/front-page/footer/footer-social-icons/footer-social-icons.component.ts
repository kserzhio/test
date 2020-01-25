import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Menu, SocialLinks} from '../../../shared/interface';
import {FetchDataService} from '../../../shared/services/fetch.service';

@Component({
  selector: 'app-footer-social-icons',
  templateUrl: './footer-social-icons.component.html',
  styleUrls: ['./footer-social-icons.component.less']
})
export class FooterSocialIconsComponent implements OnInit {

  links$: Observable<SocialLinks[]>
  constructor(private menuServices: FetchDataService) { }

  ngOnInit() {
    this.links$ = this.menuServices.fetchSocialIcons();
  }
}
