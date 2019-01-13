import { Component, OnInit } from '@angular/core';

import { UrlService } from '../url.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private urlService: UrlService) { }

  ngOnInit() {
  }

  get isLocalDB(): boolean {
    return this.urlService.isLocalDb;
  }

  set isLocalDB(value: boolean) {
    this.urlService.isLocalDb = value;
  }

}
