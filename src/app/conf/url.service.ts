import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private _useLocalDb: boolean | null;

  constructor(private httpClient: HttpClient) {
      this._useLocalDb = null;
  }

  get useLocalDb(): boolean {
    if (this._useLocalDb != null) {
      return this._useLocalDb;
    }

    return this._useLocalDb = (sessionStorage.getItem('settings.useLocalDb') == 'true');
  }
  
  set useLocalDb(value: boolean) {
    this._useLocalDb = value;
    sessionStorage.setItem('settings.useLocalDb', value ? 'true' : 'false');
  }

  get baseURL(): string {
    return this.useLocalDb ? environment.API_URL_LOCAL : environment.API_URL_PLACE;
  }

  checkLocalDb(): Observable<void> {
    return this.httpClient.get<void>(environment.API_URL_LOCAL + '/profile');
  }
}
