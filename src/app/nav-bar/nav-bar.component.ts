import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  links: any;

  constructor() { }

  ngOnInit() {
    this.links = [
      { routerLink: ['/simple-binding'], text: 'Simple Binding' },
      { routerLink: ['/books'], text: 'Books' },
      { routerLink: ['/hello-service'], text: 'Hello Service' },
      { routerLink: ['/posts'], text: 'Posts' },
      { routerLink: ['/account'], text: 'Account' },
    ];
  }

}
