import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrontPageComponent} from './front-page/front-page.component';
import {AppComponent} from './app.component';
const routes: Routes = [
  {
    path: '' , component: AppComponent , children : [
      {path: '', component: FrontPageComponent},
      {path: 'case-studies', component: FrontPageComponent},
      {path: 'services', component: FrontPageComponent},
      {path: 'expertise', component: FrontPageComponent},
      {path: 'about', component: FrontPageComponent},
      {path: 'contact', component: FrontPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
