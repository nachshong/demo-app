import { Component, OnInit } from '@angular/core';

import { PostsService } from './posts.service'
import { Post } from './post'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Array<Post>;
  users: Object;
  newPost: Post;

  constructor(private postService: PostsService) { 
    this.users = new Object();
  }

  ngOnInit() {
    this.newPost = new Post();
    this.load();
  }

  load() {
    this.postService.getUsers().subscribe(
      (value) => { value.forEach((s: any) => { this.users[s.id] = s}) }
    );

    this.postService.getPosts().subscribe(
      (value) => { this.posts = value }
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
    this.postService.editUser(post).subscribe(
      s => { 
        Object.assign(post, s);
        console.log(s) 
      }
    );
  }

  deletePost(id: number)
  {
    this.postService.deleteUser(id).subscribe(
      s => { 
        this.posts.splice(this.posts.findIndex(i => i.id == id), 1);
        console.log(s) 
      }
    );
  }

  get isDbLocal(): boolean {
    return this.postService.getDbLocal();
  }

  set isDbLocal(value: boolean) {
    this.postService.setDbLocal(value);
    this.load();
  }
}