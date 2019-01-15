import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  returnUrl: string;
  error: string;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => this.returnUrl = params['return'] || '/');
  }

  login() {
    this.error = '';
    var success = this.authService.login(this.username, this.password);

    if (success) {
      this.router.navigate([this.returnUrl]);
    } else {
      this.error = 'Login failed!';
      this.password = '';
    }
  }

}
