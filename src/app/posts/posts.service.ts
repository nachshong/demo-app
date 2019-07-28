import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

import { UrlService } from '../common/url.service'
import { Post } from './post'
import { User } from './user'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient, private urlService: UrlService)  { }

  private mapToRemotePost(post: Post): any {
    return { id: post.id, userId: post.userId, title: post.title, body: post.body, version: post.version };
  }

  private mapToLocalPost(post: any): Post {
    return new Post(post.id, post.userId, post.title, post.body, post.version || 1);
  }

  getPosts(): Observable<Array<Post>> {
    return this.httpClient.get<Array<any>>(this.urlService.baseURL + '/posts')
      .pipe(map(list => list.map(this.mapToLocalPost)));
  }

  getUsers(): Observable<Array<User>> {
    return this.httpClient.get<Array<any>>(this.urlService.baseURL + '/users')
      .pipe(map(list => list.map(s => new User(s.id, s.name))));
  }

  addPost(post: Post): Observable<Post> {
    var value = this.mapToRemotePost(post);
    
    return this.httpClient.post(this.urlService.baseURL + '/posts', value)
      .pipe(map(this.mapToLocalPost));
  }

  editPost(post: Post): Observable<Post> {
    var value = this.mapToRemotePost(post);

    // fake version increment (it should be on the server side)
    value.version++;

    return this.httpClient.put(this.urlService.baseURL + '/posts/' + post.id, value)
      .pipe(map(this.mapToLocalPost));
  }

  deletePost(id: number)
  {
    return this.httpClient.delete(this.urlService.baseURL + '/posts/' + id);
  }
}
