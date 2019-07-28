import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

import { UrlService } from '../common/url.service'
import { User } from './user'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient, private urlService: UrlService) { }

  private mapToLocalUser(user: any): User {
    return new User(user.id, user.name, user.username, user.email, user.phone);
  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<any>(this.urlService.baseURL + '/users/' + id)
    .pipe(map(this.mapToLocalUser));
  }
}
