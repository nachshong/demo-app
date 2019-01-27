import { Component, OnInit } from '@angular/core';
import { map, startWith } from 'rxjs/operators'
import { NgForm, FormControl } from '@angular/forms';

import { PostsService } from './posts.service'
import { Post } from './post'
import { UsersService } from '../users/users.service';
import { User } from '../users/user';
import { Observable } from 'rxjs';

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
  userFilterControl: FormControl;
  userFilterOptions: Observable<User[]>;

  constructor(private postService: PostsService, private usersService: UsersService) { 
    this.posts = null;
    this.users = null;
    this.usersMap = null;
    this.newPost = new Post();
    this.filter = new Object();
    this.userFilterControl = new FormControl();
  }

  ngOnInit() {
    this.postService.getPosts().subscribe(list => { 
      this.posts = list 
    });

    this.usersService.getUsers().subscribe(list => {
      this.users = list;
      this.usersMap = new Map(list.map(u => <[number, User]>[u.id, u]));
    });
    
    this.userFilterOptions = this.userFilterControl.valueChanges.pipe(
      startWith(''),
      map((value: string) => {
        this.filter.user = value;

        if (!value || typeof value === 'object')
          return this.users;

        let pattern = value.toLowerCase();
        return this.users.filter(u => u.name.toLowerCase().includes(pattern))
      })
    );
    
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
