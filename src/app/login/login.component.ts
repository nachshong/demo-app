import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login('u', 'p');
    this.router.navigate(['/']);
  }

}
