import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from './auth/auth.service'
import { UrlService } from './conf/url.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'The Open Univeristy of Israel';
  isLocalDbUp: boolean;

  constructor(private router: Router, private authService: AuthService, private urlService: UrlService) { 
    this.isLocalDbUp = false;
  }

  ngOnInit() {
    this.urlService.checkLocalDb().subscribe(
      () => { this.isLocalDbUp = true },
      () => { this.isLocalDbUp = false }
    );
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  get username(): string {
    return this.authService.getTokenData().name;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  get isLocalDbInUse(): boolean {
    return this.urlService.isLocalDb;
  }

  set isLocalDbInUse(value: boolean) {
    this.urlService.isLocalDb = value;
  }
}
