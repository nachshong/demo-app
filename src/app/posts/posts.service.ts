import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

import { Post } from './post'

const API_URL_PLACE: string = 'https://jsonplaceholder.typicode.com'
const API_URL_LOCAL: string = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private serviceUrl: string;

  constructor(private httpClient: HttpClient)  { 
    this.serviceUrl = API_URL_PLACE;
  }

  private mapToRemotePost(post: Post): any {
    return { id: post.id, userId: post.userId, title: post.title, body: post.body, version: post.version + 1 };
  }

  private mapToLocalPost(post: any): Post {
    return new Post(post.id, post.userId, post.title, post.body, post.version || 1);
  }

  getPosts(): Observable<Array<Post>> {
    return this.httpClient.get<Array<any>>(this.serviceUrl + '/posts')
      .pipe(map(list => list.map(this.mapToLocalPost)));
  }

  addPost(post: Post): Observable<Post> {
    var value = this.mapToRemotePost(post);
    
    return this.httpClient.post(this.serviceUrl + '/posts', value)
      .pipe(map(this.mapToLocalPost));
  }

  editUser(post: Post): Observable<Post> {
    var value = this.mapToRemotePost(post);

    return this.httpClient.put(this.serviceUrl + '/posts/' + post.id, value)
      .pipe(map(this.mapToLocalPost));
  }

  deleteUser(id: number)
  {
    return this.httpClient.delete(this.serviceUrl + '/posts/' + id);
  }

  getUsers() {
    return this.httpClient.get<Array<Object>>(this.serviceUrl + '/users');
  }

  setDbLocal(value: boolean) {
    this.serviceUrl = value ? API_URL_LOCAL : API_URL_PLACE;
  }

  getDbLocal() : boolean {
    return this.serviceUrl == API_URL_LOCAL;
  }
}