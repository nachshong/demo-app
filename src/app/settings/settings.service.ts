import { Injectable } from '@angular/core';
import { SettingsValue } from './settings-value';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private _useLocalDb: SettingsValue<boolean>;

  constructor() { 
    this._useLocalDb = new SettingsValue<boolean>('settings.useLocalDb', false);
  }

  get useLocalDb(): boolean {
    return this._useLocalDb.get();
  }

  set useLocalDb(value: boolean) {
    this._useLocalDb.set(value);
  }
}
