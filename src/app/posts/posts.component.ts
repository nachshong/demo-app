import { Component, OnInit } from '@angular/core';

import { PostsService } from './posts.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Array<Object>;
  users: Object;
  userId: number;

  constructor(private postService: PostsService) { 
    this.users = new Object();
  }

  ngOnInit() {
    this.postService.getUsers().subscribe(
      (value) => { value.forEach((s: any) => { this.users[s.id] = s}) }
    );

    this.postService.getPosts().subscribe(
      (value) => { this.posts = value }
    );
  }

  filter(userId: number)
  {
    this.userId = userId;
  }
}