import { Component, OnInit } from '@angular/core';

import { UrlService } from '../url.service';
import { PostsService } from './posts.service'
import { Post } from './post'
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Array<Post>;
  users: Object;
  newPost: Post;

  constructor(private postService: PostsService, private usersService: UsersService, private urlService: UrlService) { 
    this.users = new Object();
  }

  ngOnInit() {
    this.newPost = new Post();
    this.load();
  }

  load() {
    this.usersService.getUsers().subscribe(
      list => { list.forEach(s => { this.users[s.id] = s}) }
    );

    this.postService.getPosts().subscribe(
      list => { this.posts = list }
    );
  }

  addPost() {
    this.postService.addPost(this.newPost).subscribe(
      s => { 
        this.posts.push(s);
        console.log(s) 
      }
    );
  }

  editPost(post: Post) {
    this.postService.editPost(post).subscribe(
      s => { 
        Object.assign(post, s);
        console.log(s) 
      }
    );
  }

  deletePost(id: number)
  {
    this.postService.deletePost(id).subscribe(
      s => { 
        this.posts.splice(this.posts.findIndex(i => i.id == id), 1);
        console.log(s) 
      }
    );
  }

  get isLocalDB(): boolean {
    return this.urlService.isLocalDb;
  }
  set isLocalDB(value: boolean) {
    this.urlService.isLocalDb = value;
    this.load();
  }
}