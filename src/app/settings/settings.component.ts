import { Component, OnInit } from '@angular/core';

import { UrlService } from '../common/url.service';
import { SettingsService } from './settings.service';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  private timerSubscription: Subscription;

  isLocalDbUp: boolean;

  constructor(private urlService: UrlService, private settingsService: SettingsService) { 
    this.isLocalDbUp = null;
  }

  ngOnInit() {
    this.timerSubscription = timer(0, 10000).subscribe(() => {
      this.urlService.isLocalDbUp().subscribe(
        (value) => { this.isLocalDbUp = value }
      );
    });
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }

  get useLocalDb(): boolean {
    return this.settingsService.useLocalDb;
  }

  set useLocalDb(value: boolean) {
    this.settingsService.useLocalDb = value;
  }
}
