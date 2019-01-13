import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt'

const JWT_TOKEN_NAME: string = 'jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jwtHelper: JwtHelperService) { }

  static getJWT(): string {
    return sessionStorage.getItem(JWT_TOKEN_NAME);
  }

  login(username: string, password: string): boolean {
    // fake login for John Doe (1234567890)
    sessionStorage.setItem(JWT_TOKEN_NAME, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTQ3MzY5MDIyLCJleHAiOjI1NDczNjkwMjJ9.YH0g_jJDw9T8bwne0dvU-O07MwgHYqjXVtAnbPw91sU');

    return true;
  }

  logout() {
    sessionStorage.removeItem(JWT_TOKEN_NAME);
  }

  isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired();
  }

  getTokenData(): any {
    return this.jwtHelper.decodeToken();
  }

}
