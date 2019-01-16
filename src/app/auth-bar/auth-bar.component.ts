import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-auth-bar',
  templateUrl: './auth-bar.component.html',
  styleUrls: ['./auth-bar.component.css']
})
export class AuthBarComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
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

}
