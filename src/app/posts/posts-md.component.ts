import { Component, OnInit } from '@angular/core';

import { PostsService } from './posts.service'
import { Post } from './post'
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-posts-md',
  templateUrl: './posts-md.component.html',
  styleUrls: ['./posts-md.component.css']
})
export class PostsMdComponent implements OnInit {

  posts: Array<Post>;
  users: Object;
  newPost: Post;

  constructor(private postService: PostsService, private usersService: UsersService) { 
    this.users = new Object();
    this.newPost = new Post();
  }

  ngOnInit() {
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
        this.newPost = new Post();
        console.log(s) 
      }
    );
  }

  editPost(post: Post) {
    this.postService.editPost(post.stage).subscribe(
      s => { 
        Object.assign(post, s);
        post.stage = null;
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

  toggleEditMode(item: Post) {
    item.stage = item.stage ? null : Object.assign(new Post(), item);
  }
}
