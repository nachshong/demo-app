import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Array<Object>> {
    return this.httpClient.get<Array<Object>>('https://jsonplaceholder.typicode.com/posts');
  }

  getUsers() {
    return this.httpClient.get<Array<Object>>('https://jsonplaceholder.typicode.com/users');
  }
}