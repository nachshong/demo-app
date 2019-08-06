import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { SettingsValue } from './settings-value';
import { UrlService } from '../common/url.service';
import { TimeService } from '../common/time.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private _useLocalDb: SettingsValue<boolean>;
  private _logOnTimerTick: SettingsValue<number>;

  constructor(private urlService: UrlService) { 
    this._useLocalDb = new SettingsValue<boolean>('settings.UrlService.useLocalDb', UrlService.useLocalDb, value => { UrlService.useLocalDb = value });
    this._logOnTimerTick = new SettingsValue<number>('settings.TimeService.useLocalDb', TimeService.logTimerTick, value => { TimeService.logTimerTick = value });
  }

  applicationStart() {
    this._useLocalDb.init();
    this._logOnTimerTick.init();
  }

  isLocalDbUp(): Observable<boolean> {
    return interval(10000).pipe(
      switchMap(() => this.urlService.isLocalDbUp())
    );
  }

  get useLocalDb(): boolean {
    return this._useLocalDb.get();
  }

  set useLocalDb(value: boolean) {
    this._useLocalDb.set(value);
  }

  get logOnTimerTick(): number {
    return this._logOnTimerTick.get();
  }

  set logOnTimerTick(value: number) {
    if (value < 0) {
      throw new Error(`Invalid value ${value}.`)
    }

    this._logOnTimerTick.set(value);
  }
}
