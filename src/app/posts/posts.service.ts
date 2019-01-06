import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

import { Post } from './post'

const API_SOURCE: string = 'https://jsonplaceholder.typicode.com'
//const API_SOURCE: string = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  private getRemotePost(post: Post): any {
    return { id: post.id, userId: post.userId, title: post.title, body: post.body };
  }

  getPosts(): Observable<Array<Post>> {
    return this.httpClient.get<Array<any>>(API_SOURCE + '/posts')
      .pipe(map(s => s.map(
        t => { return new Post(t.id, t.userId, t.title, t.body)}
      )));
  }

  addPost(post: Post): Observable<Post> {
    var value = this.getRemotePost(post);
    return this.httpClient.post(API_SOURCE + '/posts', value).pipe(
      map((s: any) => new Post(s.id, s.userId, s.title, s.body))
    );
  }

  editUser(post: Post) {
    var value = this.getRemotePost(post);
    return this.httpClient.put(API_SOURCE + '/posts/' + post.id, value);
  }

  deleteUser(id: number)
  {
    return this.httpClient.delete(API_SOURCE + '/posts/' + id);
  }

  getUsers() {
    return this.httpClient.get<Array<Object>>('https://jsonplaceholder.typicode.com/users');
  }
}