import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  private jwtToken: any;
  authUser: string;
  authId: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.jwtToken= this.authService.getTokenData();
    this.authUser = this.jwtToken.name;
    this.authId = this.jwtToken.sub;
  }

}
