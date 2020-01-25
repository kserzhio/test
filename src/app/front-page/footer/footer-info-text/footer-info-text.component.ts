import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {InfoText} from '../../../shared/interface';
import {FetchDataService} from '../../../shared/services/fetch.service';

@Component({
  selector: 'app-footer-info-text',
  templateUrl: './footer-info-text.component.html',
  styleUrls: ['./footer-info-text.component.less']
})
export class FooterInfoTextComponent implements OnInit {

  text$: Observable<InfoText[]>
  constructor(private menuServices: FetchDataService) { }

  ngOnInit() {
    this.text$ = this.menuServices.fetchInfoText();
  }
}
