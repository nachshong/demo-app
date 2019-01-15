import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from './auth/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'The Open Univeristy of Israel';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() { }

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

}
