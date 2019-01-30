import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { map, startWith, first } from 'rxjs/operators'

import { PostsService } from './posts.service'
import { Post } from './post'
import { UsersService } from '../users/users.service';
import { User } from '../users/user';
import { ByRefValue } from '../common/by-ref-value';

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
  total: ByRefValue<number>;

  constructor(private postService: PostsService, private usersService: UsersService) { 
    this.posts = null;
    this.users = null;
    this.usersMap = null;
    this.newPost = new Post();
    this.filter = new Object();
    this.userFilterControl = new FormControl();
    this.total = new ByRefValue(0);
  }

  ngOnInit() {
    let dataGate = new Subject();

    dataGate.pipe(
      first(() => !!(this.usersMap && this.posts))
    ).subscribe(() => this.initSetPostsByUser());

    dataGate.pipe(
      first(() => !!(this.users))
    ).subscribe(() => this.initSetUserFilterOptions());

    this.postService.getPosts().subscribe(list => { 
      this.posts = list;
      dataGate.next();
    });

    this.usersService.getUsers().subscribe(list => {
      this.users = list;
      dataGate.next();

      this.usersMap = new Map(list.map(u => <[number, User]>[u.id, u]));
      dataGate.next();
    });
   
  }

  initSetPostsByUser() {
    this.posts.forEach(item => {
      item.author = this.usersMap.get(item.userId).name;
    });
  }

  initSetUserFilterOptions() {
    this.userFilterOptions = this.userFilterControl.valueChanges.pipe(
      startWith(''),
      map((value: string | User) => {
        this.filter.user = value;

        if (!value || value instanceof User)
          return this.users;

        let search = value.toLowerCase();
        return this.users.filter(u => u.name.toLowerCase().includes(search))
      })
    );
  }

  resetFilter() {
    this.filter = new Object();
    this.userFilterControl.reset();
  }

  addPost(form: NgForm) {
    if (form.valid) {
      this.postService.addPost(this.newPost).subscribe(
        s => {
          this.posts.push(s);
          s.author = this.usersMap.get(s.userId).name;
          form.resetForm();
          console.log(s) 
        }
      );
    } else {
      // invalid
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
