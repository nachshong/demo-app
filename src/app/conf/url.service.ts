import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private _baseUrl: string;

  constructor() {
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
}
