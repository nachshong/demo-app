import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from './auth/auth.service'
import { UrlService } from './conf/url.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Open Univeristy of Israel';

  constructor(private router: Router, private authService: AuthService, private urlService: UrlService) { }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  get isLocalDB(): boolean {
    return this.urlService.isLocalDb;
  }

  set isLocalDB(value: boolean) {
    this.urlService.isLocalDb = value;
  }
}
