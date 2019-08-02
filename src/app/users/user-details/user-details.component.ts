import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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
  obUser: Observable<User>;

  constructor(private usersService: UsersService, private route: ActivatedRoute) { 
    this.user = new User();
    
    // Use switchMap to combine observables. switchMap is the preferred operation,
    // because its behavior to emitting values only from the most recently projected Observable.
    this.obUser = this.route.params.pipe(switchMap(params => {
      var userId = Number.parseInt(params['id']);
      return this.usersService.getUser(userId);
    }));
  }

  ngOnInit() {
    this.counter = this.usersService.counter.next();
    
    this.obUser.subscribe(
      value => this.user = value
    );
  }
}
