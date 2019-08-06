import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { mapTo, catchError  } from 'rxjs/operators';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  static useLocalDb: boolean = false;

  constructor(private httpClient: HttpClient) { }

  isLocalDbUp(): Observable<boolean> {
    return this.httpClient.get<void>(environment.API_URL_LOCAL + '/profile').pipe(mapTo(true), catchError(() => of(false)));
  }

  get baseURL(): string {
    return UrlService.useLocalDb ? environment.API_URL_LOCAL : environment.API_URL_PLACE;
  }
}
