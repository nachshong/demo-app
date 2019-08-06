import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  private subscriptions: Subscription[];

  isLocalDbUp: boolean;

  constructor(private settingsService: SettingsService) { 
    this.isLocalDbUp = null;
    this.subscriptions = [];
  }

  ngOnInit() {
    var sub = this.settingsService.isLocalDbUp().subscribe(value => {
      this.isLocalDbUp = value;
    });

    this.subscriptions.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(item => {
      item.unsubscribe();
    });
  }

  get useLocalDb(): boolean {
    return this.settingsService.useLocalDb;
  }

  set useLocalDb(value: boolean) {
    this.settingsService.useLocalDb = value;
  }

  get logOnTimerTick(): number {
    return this.settingsService.logOnTimerTick;
  }

  set logOnTimerTick(value: number) {
    this.settingsService.logOnTimerTick = value;
  }

  raiseError() {
    throw new Error("SettingsComponent raised an error.");
  }
}
