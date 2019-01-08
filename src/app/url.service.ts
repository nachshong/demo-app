import { Injectable } from '@angular/core';

const API_URL_PLACE: string = 'https://jsonplaceholder.typicode.com'
const API_URL_LOCAL: string = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private _baseUrl: string;

  constructor() {
    this._baseUrl = API_URL_PLACE;
   }

   get isLocalDb(): boolean {
     return this._baseUrl == API_URL_LOCAL;
   }
   set isLocalDb(value: boolean) {
    this._baseUrl = value ? API_URL_LOCAL : API_URL_PLACE;
   }

   get baseURL(): string {
     return this._baseUrl;
   }
}
