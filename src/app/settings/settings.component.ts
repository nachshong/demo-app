import { Component, OnInit } from '@angular/core';

import { UrlService } from '../conf/url.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  isLocalDbUp: boolean;

  constructor(private urlService: UrlService) { 
    this.isLocalDbUp = false;
  }

  ngOnInit() {
    this.urlService.checkLocalDb().subscribe(
      () => { this.isLocalDbUp = true },
      () => { this.isLocalDbUp = false }
    );
  }

  get isLocalDbInUse(): boolean {
    return this.urlService.isLocalDb;
  }

  set isLocalDbInUse(value: boolean) {
    this.urlService.isLocalDb = value;
  }

}
