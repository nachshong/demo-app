import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../user';
import { UsersService } from '../users.service'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User;
  counter: number;

  constructor(private usersService: UsersService, private route: ActivatedRoute) { 
    this.user = new User();
  }

  ngOnInit() {
    this.counter = this.usersService.counter.next();

    this.route.params.subscribe(params => { 
        var userId = Number.parseInt(params['id']);
        this.usersService.getUser(userId).subscribe(
          value => this.user = value
        );
    });
  }
}
