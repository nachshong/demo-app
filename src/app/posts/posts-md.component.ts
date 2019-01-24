import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostsService } from './posts.service'
import { Post } from './post'
import { UsersService } from '../users/users.service';
import { User } from '../users/user';

@Component({
  selector: 'app-posts-md',
  templateUrl: './posts-md.component.html',
  styleUrls: ['./posts-md.component.css']
})
export class PostsMdComponent implements OnInit {

  posts: Array<Post>;
  users: Array<User>;
  usersMap: Map<number, User>;
  newPost: Post;
  filter: any;

  constructor(private postService: PostsService, private usersService: UsersService) { 
    this.posts = null;
    this.users = null;
    this.usersMap = null;
    this.newPost = new Post();
    this.filter = new Object();
  }

  ngOnInit() {
    this.postService.getPosts().subscribe(list => { 
      this.posts = list 
    });

    this.usersService.getUsers().subscribe(list => {
      this.users = list;
      this.usersMap = new Map(list.map(u => <[number, User]>[u.id, u]));
    });
  }

  resetFilter() {
    this.filter = new Object();
  }

  addPost(form: NgForm) {
    if (form.valid) {
      this.postService.addPost(this.newPost).subscribe(
        s => {
          this.posts.push(s);
          form.resetForm();
          console.log(s) 
        }
      );
    } else {

    }
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
