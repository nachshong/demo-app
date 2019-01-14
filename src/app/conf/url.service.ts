import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { mapTo } from 'rxjs/operators';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private _baseUrl: string;

  constructor(private httpClient: HttpClient) {
      this._baseUrl = environment.API_URL_PLACE
  }

  get isLocalDb(): boolean {
    return this._baseUrl == environment.API_URL_LOCAL;
  }
  
  set isLocalDb(value: boolean) {
    this._baseUrl = value ? environment.API_URL_LOCAL : environment.API_URL_PLACE;
  }

  get baseURL(): string {
    return this._baseUrl;
  }

  checkLocalDb(): Observable<void> {
    return this.httpClient.get<void>(environment.API_URL_LOCAL + '/profile');
  }
}
