import { Component } from '@angular/core';
import {fadeAnimation} from './shared/animation/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [fadeAnimation]
})

export class AppComponent {
  constructor() { }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
