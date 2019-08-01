import { Component, VERSION } from '@angular/core';

import { UptimeService } from './common/uptime.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Open Univeristy of Israel';
  version = VERSION.full;

  constructor(private uptimeService: UptimeService) {
    uptimeService.applicationStart();
  }
}
