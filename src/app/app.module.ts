import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { HeaderComponent } from './front-page/header/header.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MenuTopComponent } from './front-page/header/menu-top/menu-top.component';
import { IntroComponent } from './front-page/intro/intro.component';
import { MainContentComponent } from './front-page/main-content/main-content.component';
import { FooterComponent } from './front-page/footer/footer.component';
import { FooterMenuComponent } from './front-page/footer/footer-menu/footer-menu.component';
import { FooterSocialIconsComponent } from './front-page/footer/footer-social-icons/footer-social-icons.component';
import { FooterInfoTextComponent } from './front-page/footer/footer-info-text/footer-info-text.component';
import { AboutUsComponent } from './front-page/main-content/about-us/about-us.component';
import { PageCaseStudiesComponent } from './page-case-studies/page-case-studies.component';
import { PageServicesComponent } from './page-services/page-services.component';
import { PageExpertiseComponent } from './page-expertise/page-expertise.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import {AppRoutingModule} from './app-routing.module';
import { TabContentComponent } from './front-page/main-content/tab-content/tab-content.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    HeaderComponent,
    MenuTopComponent,
    IntroComponent,
    MainContentComponent,
    FooterComponent,
    FooterMenuComponent,
    FooterSocialIconsComponent,
    FooterInfoTextComponent,
    AboutUsComponent,
    PageCaseStudiesComponent,
    PageServicesComponent,
    PageExpertiseComponent,
    PageAboutComponent,
    PageContactComponent,
    TabContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
