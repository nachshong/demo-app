import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { mapTo, catchError  } from 'rxjs/operators';

import { environment } from '../../environments/environment'
import { SettingsService } from '../settings/settings.service';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private httpClient: HttpClient, private settingsService: SettingsService) { }

  isLocalDbUp(): Observable<boolean> {
    return this.httpClient.get<void>(environment.API_URL_LOCAL + '/profile').pipe(mapTo(true), catchError(() => of(false)));
  }

  get baseURL(): string {
    return this.settingsService.useLocalDb ? environment.API_URL_LOCAL : environment.API_URL_PLACE;
  }
}
