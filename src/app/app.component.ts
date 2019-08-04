import { Component, VERSION } from '@angular/core';

import { TimeService } from './common/time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Open Univeristy of Israel';
  version = VERSION.full;

  constructor(private timeService: TimeService) {
    timeService.applicationStart();
  }
}
