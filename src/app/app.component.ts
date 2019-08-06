import { Component, VERSION } from '@angular/core';

import { TimeService } from './common/time.service';
import { SettingsService } from './settings/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Open Univeristy of Israel';
  version = VERSION.full;

  constructor(timeService: TimeService, settingsService: SettingsService ) {
    timeService.applicationStart();
    settingsService.applicationStart();
  }
}
