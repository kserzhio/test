import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AboutUs, Copy, InfoText, Intro, Menu, SocialLinks, Tab} from '../interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  constructor(private http: HttpClient) {}
  fetch(): Observable<Menu[]> {
    return this.http.get<Menu[]>('http://localhost:3000/header-menu');
  }
  fetchMenuFooter(): Observable<Menu[]> {
    return this.http.get<Menu[]>('http://localhost:3000/footer-menu');
  }
  fetchIntro(): Observable<Intro[]> {
    return this.http.get<Intro[]>('http://localhost:3000/promo-text');
  }
  fetchTab(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/tab');
  }
  fetchSocialIcons(): Observable<SocialLinks[]> {
    return this.http.get<SocialLinks[]>('http://localhost:3000/social-link');
  }
  fetchInfoText(): Observable<InfoText[]> {
    return this.http.get<InfoText[]>('http://localhost:3000/info-text');
  }
  fetchAboutUs(): Observable<AboutUs[]> {
    return this.http.get<AboutUs[]>('http://localhost:3000/about-us');
  }
  fetchCopy(): Observable<Copy[]> {
    return this.http.get<Copy[]>('http://localhost:3000/copy');
  }
}
